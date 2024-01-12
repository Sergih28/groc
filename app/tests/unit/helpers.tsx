import { DEFAULT_COUNTER_VALUES, DEFAULT_PHASE, DEFAULT_SETTINGS_VALUES } from '@store/constants'
import { $counter, $phase, $settings } from '@store/Pomodoro'

export const colorToRgb = (color: string) => {
  const tempElem = document.createElement('div')
  tempElem.style.color = color

  document.body.appendChild(tempElem)

  const computedColor = window.getComputedStyle(tempElem).color

  document.body.removeChild(tempElem)

  return computedColor
}

export const resetCounterState = () => {
  $counter.set(DEFAULT_COUNTER_VALUES)
}

export const resetPhaseState = () => {
  $phase.set(DEFAULT_PHASE)
}

export const resetSettingsState = () => {
  $settings.set(DEFAULT_SETTINGS_VALUES)
}

export const resetGlobalState = () => {
  resetCounterState()
  resetPhaseState()
  resetSettingsState()
}
