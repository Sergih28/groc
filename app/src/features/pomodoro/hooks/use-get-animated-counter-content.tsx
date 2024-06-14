import { animated, SpringValue, useTransition } from '@react-spring/web'

const useGetAnimatedCounterContent = (counterContent: string) => {
  const TRANSITION = {
    from: { opacity: 0, transform: 'translate3d(0, -80%, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    exitBeforeEnter: true,
    leave: { opacity: 0, transform: 'translate3d(0, 50%, 0)' },
    initial: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    config: { duration: 250 },
  }

  const renderAnimatedElement = (
    style: { opacity: SpringValue<number>; transform: SpringValue<string> },
    digit: string,
  ) => {
    // The issue with the test warnings is here:
    // we need to add a key to the animated <span> elements
    return (
      <animated.span className="tabular-nums" style={style}>
        {digit}
      </animated.span>
    )
  }

  const counterDigits = counterContent.split('')

  const animatedCounter = () => {
    return (
      <>
        {counterDigits.map((digit: string) => {
          return useTransition(digit, TRANSITION)(renderAnimatedElement)
        })}
      </>
    )
  }
  return { animatedCounter }
}

export default useGetAnimatedCounterContent
