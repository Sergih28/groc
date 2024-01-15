import * as sampleData from '@data/pomodoroSampleData.json'
import { DEFAULT_PHASE, DEFAULT_SETTINGS_VALUES } from '@store/constants'
import { localStorageItems } from '@utils/storage/keys'
import {
  createPomodoro,
  deletePomodoro,
  generatePomodoro,
  getLastPomodoro,
  getPomodoros,
  updatePomodoros,
} from '@utils/storage/pomodoro'
import type { PomodoroType } from '@utils/storage/types'

describe('localStorage tests', () => {
  const mockedRandomUUID = '1838f290-5dfc-478b-b21c-6d867ff1223a'
  beforeAll(() => {
    crypto.randomUUID = vi.fn(() => mockedRandomUUID)
  })

  afterAll(() => {
    vi.resetAllMocks()
  })

  afterEach(() => {
    localStorage.clear()
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
          startTime: Date.now(),
          endTime: null,
          pausedTimeRanges: null,
          expectedDuration: 25,
          phase: 'pomodoro',
        },
      ]

      localStorage.setItem(localStorageItems.pomodoro, JSON.stringify(pomodoro))

      const savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([...pomodoro])
    })
  })

  describe('createPomodoro()', () => {
    test('creates a new pomodoro object with default values', () => {
      const newPomodoro = generatePomodoro()

      expect(newPomodoro).toBeDefined()
      expect(newPomodoro).toEqual({
        id: crypto.randomUUID(),
        startTime: newPomodoro.startTime,
        endTime: null,
        pausedTimeRanges: null,
        phase: DEFAULT_PHASE,
        expectedDuration: DEFAULT_SETTINGS_VALUES[`${DEFAULT_PHASE}Duration`],
      })
    })
  })

  describe('deletePomodoro()', () => {
    test('given a pomodoro id, it should delete that given pomodoro from the localStorage', () => {
      const pomodoro = generatePomodoro()
      createPomodoro(pomodoro)

      let savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([pomodoro])

      deletePomodoro(pomodoro.id)

      savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([])
    })
  })

  describe('updatePomodoros()', () => {
    test('given a new array of pomodoros, should update the localStorage to that given list', () => {
      const pomodoroList = sampleData as PomodoroType[]

      let savedPomodoros = getPomodoros()

      expect(savedPomodoros).toEqual([])

      updatePomodoros(pomodoroList)

      savedPomodoros = getPomodoros()

      expect(savedPomodoros).toMatchObject(pomodoroList)
    })
  })

  describe('getLastPomodoro()', () => {
    test('should return null if there is no pomodoro data', () => {
      const pomodoro = getLastPomodoro()

      expect(pomodoro).toBeNull()
    })
  })

  test('should return the last pomodoro if there is data', () => {
    const newPomodoro = generatePomodoro()
    createPomodoro(newPomodoro)

    const lastPomodoro = getLastPomodoro()

    expect(lastPomodoro).not.toBeNull()
    expect(lastPomodoro).toBeDefined()
  })
})
