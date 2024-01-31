export const accurateTimer = (fn: () => void, time = 100) => {
  let nextAt: number
  let timeout: NodeJS.Timeout

  nextAt = new Date().getTime() + time

  const wrapper = () => {
    nextAt += time

    timeout = setTimeout(wrapper, nextAt - new Date().getTime())

    fn()
  }

  const cancel = () => clearTimeout(timeout)

  timeout = setTimeout(wrapper, nextAt - new Date().getTime())

  return { cancel }
}
