import { useStore } from '@nanostores/react'

import { pomodoroStore } from '@store/Pomodoro/'
import { handlePhase } from '@store/Pomodoro/actions'

import Button from '@atoms/Buttons/Button'

import { BUTTON_TEXT } from './constants'

import './styles.css'

export const PhaseButtons = () => {
  const { phase } = useStore(pomodoroStore.state)

  const buttonPhases = ['pomodoro', 'break', 'longBreak'] as const

  return (
    <div className="pomodoro__buttons">
      {buttonPhases.map((buttonPhase, index) => {
        let styles = 'pomodoro__button'
        styles += buttonPhase === phase ? '--selected' : ''

        return (
          <Button key={index} handleClick={() => handlePhase(buttonPhase)} styles={styles}>
            {BUTTON_TEXT[buttonPhase]}
          </Button>
        )
      })}
    </div>
  )
}
