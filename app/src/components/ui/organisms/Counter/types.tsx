export interface CounterProps {
  seconds: number
  isCountingUp: boolean
  counterFormat: 'minutes' | 'seconds'
  countingInterval: number
}
