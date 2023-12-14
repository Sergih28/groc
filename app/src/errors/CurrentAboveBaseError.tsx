export class CurrentAboveBaseError extends Error {
  constructor(current: number, base: number) {
    const message = `Current target (${current}) is greater than base (${base})`
    super(message)
    this.name = 'CurrentAboveBaseError'
  }
}
