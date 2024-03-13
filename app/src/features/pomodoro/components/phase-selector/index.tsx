import { useStore } from '@nanostores/react'

import { Button } from '@components/elements/button'

import { pomodoroStore } from '@store/pomodoro'
import { handlePhase } from '@store/pomodoro/actions'

import { BUTTON_TEXT } from './constants'

const PhaseSelector = () => {
  const { phase } = useStore(pomodoroStore.state)

  const buttonPhases = ['pomodoro', 'break', 'longBreak'] as const

  return (
    <div className="pomodoro__buttons">
      {buttonPhases.map((buttonPhase) => {
        const styles =
          buttonPhase === phase ? 'pomodoro__button pomodoro__button--selected' : 'pomodoro__button'

        return (
          <Button key={buttonPhase} onClick={() => handlePhase(buttonPhase)} className={styles}>
            {BUTTON_TEXT[buttonPhase]}
          </Button>
        )
      })}
    </div>
  )
}

export default PhaseSelector
