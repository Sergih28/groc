export class CurrentBelowTargetError extends Error {
  constructor(current: number, target: number) {
    const message = `Current target (${current}) is below target (${target})`
    super(message)
    this.name = 'CurrentBelowTargetError'
  }
}
