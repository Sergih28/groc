import { pomodoroStore } from '@store/Pomodoro'
import { DEFAULT_STATE_VALUES } from '@store/Pomodoro/constants'

export const colorToRgb = (color: string) => {
  const tempElem = document.createElement('div')
  tempElem.style.color = color

  document.body.appendChild(tempElem)

  const computedColor = window.getComputedStyle(tempElem).color

  document.body.removeChild(tempElem)

  return computedColor
}

export const resetStore = () => {
  pomodoroStore.actions.setPomodoroState(DEFAULT_STATE_VALUES)
}
