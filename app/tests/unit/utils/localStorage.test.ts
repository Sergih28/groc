import { localStorageItems } from '@utils/storage/keys'
import {
  deletePomodoro,
  generatePomodoro,
  getActivePomodoro,
  getPomodoros,
  updateActivePomodoro,
  updatePomodoros,
} from '@utils/storage/pomodoro'
import type { PomodoroType } from '@utils/storage/types'

import { pomodoroStore } from '@store/Pomodoro/'
import { DEFAULT_STATE_VALUES } from '@store/Pomodoro/constants'

const POMODORO_LIST: PomodoroType[] = [
  {
    id: '1838f290-5dfc-478b-b21c-6d867ff1223a',
    phase: 'pomodoro',
    startTime: 1637016765000,
    endTime: 1637019982000,
    pausedTimeRanges: [
      {
        start: 1637017203000,
        end: 1637017217000,
      },
      {
        start: 1637017164000,
        end: null,
      },
    ],
    expectedDuration: 1500,
    lastTick: 1637017164300,
  },
  {
    id: '5e4dbe3e-c701-418a-9ad5-d781896e1e8d',
    phase: 'pomodoro',
    startTime: 1636974084000,
    endTime: 1636978667000,
    pausedTimeRanges: [
      {
        start: 1636974270000,
        end: 1636974287000,
      },
      {
        start: 1636974580000,
        end: 1636974588000,
      },
      {
        start: 1636974430000,
        end: 1636974437000,
      },
    ],
    expectedDuration: 1200,
    lastTick: 1636974437000,
  },
  {
    id: '430aefdb-ed34-4dfd-b1f6-a28447969a4b',
    phase: 'break',
    startTime: 1636977890000,
    endTime: 1636980702000,
    pausedTimeRanges: [
      {
        start: 1636977914000,
        end: 1636977920000,
      },
      {
        start: 1636978130000,
        end: 1636978148000,
      },
      {
        start: 1636978227000,
        end: 1636978234000,
      },
    ],
    expectedDuration: 9000,
    lastTick: 1636978234000,
  },
]

describe('localStorage tests', () => {
  //Fri Jul 21 2023 12:15:45 GMT+0000
  const unixTime = 1689941745
  const mockedRandomUUID = '1838f290-5dfc-478b-b21c-6d867ff1223a'

  beforeAll(() => {
    crypto.randomUUID = vi.fn(() => mockedRandomUUID)
    Date.now = vi.fn(() => unixTime)
  })

  afterAll(() => {
    vi.resetAllMocks()
  })

  test('localStorage keys snapshot', () => {
    expect(localStorageItems).toMatchSnapshot()
    expect(crypto.randomUUID()).toBe(mockedRandomUUID)
  })

  describe('getPomodoros()', () => {
    test('given no pomodoro data in localStorage, should return an empty array', () => {
      const pomodoroData = getPomodoros()

      expect(pomodoroData).toEqual([])
    })

    test('given pomodoro list data in localStorage, should return an array of pomodoros objects', () => {
      const pomodoro: PomodoroType[] = [
        {
          id: crypto.randomUUID(),
          startTime: unixTime,
          endTime: null,
          pausedTimeRanges: [],
          expectedDuration: 25,
          phase: 'pomodoro',
          lastTick: unixTime,
        },
      ]

      updatePomodoros([...pomodoro])

      const savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([...pomodoro])
    })
  })

  describe('generatePomodoro()', () => {
    test('creates a new pomodoro object with default values', () => {
      const newPomodoro = generatePomodoro()

      expect(newPomodoro).toBeDefined()
      expect(newPomodoro).toEqual({
        id: crypto.randomUUID(),
        startTime: newPomodoro.startTime,
        endTime: null,
        pausedTimeRanges: [],
        phase: DEFAULT_STATE_VALUES.phase,
        expectedDuration: pomodoroStore.actions.getPhaseDuration(),
        lastTick: unixTime,
      })
    })
  })

  describe('deletePomodoro()', () => {
    test('given a pomodoro id, it should delete that given pomodoro from the localStorage', () => {
      const pomodoro = generatePomodoro()
      updatePomodoros([pomodoro])

      let savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([pomodoro])

      deletePomodoro(pomodoro.id)

      savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([])
    })
  })

  describe('updatePomodoros()', () => {
    test('given a new array of pomodoros, should update the localStorage to that given list', () => {
      updatePomodoros(POMODORO_LIST)

      const savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual(POMODORO_LIST)
    })
  })

  describe('getActivePomodoro()', () => {
    test('should return null if there is no pomodoro data', () => {
      const activePomodoro = getActivePomodoro()

      expect(activePomodoro).toBeNull()
    })

    test('should return the last pomodoro if there is data', () => {
      const newPomodoro = generatePomodoro()
      updateActivePomodoro(newPomodoro)

      const activePomodoro = getActivePomodoro()
      expect(activePomodoro).toBeDefined()
      expect(activePomodoro).not.toBeNull()
    })
  })
})
