export class CurrentAboveTargetError extends Error {
  constructor(current: number, target: number) {
    const message = `Current target (${current}) is greater than target (${target})`
    super(message)
    this.name = 'CurrentAboveTargetError'
  }
}
