import { calculateElapsedTime } from '@utils/time'

describe('calculatElapsedTime()', () => {
  const unixTime = 1689941745

  beforeAll(() => {
    Date.now = vi.fn(() => unixTime)
  })

  afterAll(() => {
    vi.resetAllMocks()
  })

  const ONE_MINUTE_MS = 60 * 1000
  test('given a started time being now with no pauses or end time, the elapsed time should be 0', () => {
    const elapsedTime = calculateElapsedTime(unixTime, [])

    expect(elapsedTime).toBe(0)
  })

  test('given a start time with no time range that has surpassed the expected duration, should return 0', () => {
    const START_TIME = unixTime - ONE_MINUTE_MS * 30
    const elapsedTime = calculateElapsedTime(START_TIME, [])

    expect(elapsedTime).toBe(1800000)
  })

  test('given a start time and a paused time range, should return the remaining time', () => {
    const START_TIME = unixTime - ONE_MINUTE_MS * 10
    const pausedTimes = [
      {
        start: START_TIME + ONE_MINUTE_MS * 5,
        end: START_TIME + ONE_MINUTE_MS * 10,
      },
    ]
    const elapsedTime = calculateElapsedTime(START_TIME, pausedTimes)

    expect(elapsedTime).toBe(300000)
  })

  test('given a start time and a paused time range that has not fishined, should return the remainin time', () => {
    const START_TIME = unixTime - ONE_MINUTE_MS * 60
    const pausedTimes = [
      {
        start: START_TIME + ONE_MINUTE_MS * 30,
        end: START_TIME + ONE_MINUTE_MS * 35,
      },
      {
        start: START_TIME + ONE_MINUTE_MS * 55,
        end: null,
      },
    ]
    const elapsedTime = calculateElapsedTime(START_TIME, pausedTimes)

    expect(elapsedTime).toBe(3000000)
  })

  test('given a null start time, returns 0', () => {
    const START_TIME = null

    const elapsedTime = calculateElapsedTime(START_TIME, [])

    expect(elapsedTime).toBe(0)
  })
})
