import { useStore } from '@nanostores/react'

import { pomodoroStore } from '@store/Pomodoro/'
import { handlePhase } from '@store/Pomodoro/actions'
import type { PhaseType } from '@store/Pomodoro/types'

import Button from '@atoms/Buttons/Button'

import { BUTTON_TEXT } from './constants'
import './styles.css'

export const PhaseButtons = () => {
  const { phase } = useStore(pomodoroStore.state)

  const buttonPhases = ['pomodoro', 'break', 'longBreak'] as const

  return (
    <div className="pomodoro__buttons">
      {buttonPhases.map((buttonPhase, index) => {
        let styles = 'button '
        styles = buttonPhase === phase ? 'button__chosenOption' : 'button__options'

        return (
          <Button
            key={index}
            handleClick={() => handlePhase(buttonPhase as PhaseType)}
            styles={styles}
          >
            {BUTTON_TEXT[buttonPhase]}
          </Button>
        )
      })}
    </div>
  )
}
