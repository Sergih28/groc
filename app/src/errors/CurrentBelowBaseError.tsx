export class CurrentBelowBaseError extends Error {
  constructor(current: number, base: number) {
    const message = `Current target (${current}) is below base (${base})`
    super(message)
    this.name = 'CurrentBelowBaseError'
  }
}
