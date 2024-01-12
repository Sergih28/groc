import { atom } from 'nanostores'

import type { CounterType, SettingsType } from './types'
import { DEFAULT_COUNTER_VALUES, DEFAULT_SETTINGS_VALUES } from './constants'

import type { PhaseType } from '@organisms/Pomodoro/types'

export const $counter = atom<CounterType>(DEFAULT_COUNTER_VALUES)

export const $settings = atom<SettingsType>(DEFAULT_SETTINGS_VALUES)

export const $phase = atom<PhaseType>('pomodoro')

export const handlePhase = (newPhase: PhaseType) => {
  $phase.set(newPhase)
}
