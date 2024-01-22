export const calculateSecondsFromMilliseconds = (milliseconds: number) => {
  const seconds = milliseconds / 1000

  return seconds
}

export const calculateSecondsFromMinutes = (minutes: number) => {
  const seconds = minutes * 60

  return seconds
}

export const calculateMinutesFromSeconds = (seconds: number) => {
  const minutes = seconds / 60

  return minutes
}
