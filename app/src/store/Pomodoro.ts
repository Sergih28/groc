import type { UUID } from 'crypto'

import { atom, map } from 'nanostores'

import type { CounterType, PhaseType, SettingsType } from './types'

import { DEFAULT_COUNTER_VALUES, DEFAULT_SETTINGS_VALUES } from './constants'

export const $counter = map<CounterType>(DEFAULT_COUNTER_VALUES)

export function setCounterValues(values: Partial<CounterType>): void {
  for (const key in values) {
    $counter.setKey(
      key as keyof CounterType,
      values[key as keyof CounterType] as CounterType[keyof CounterType],
    )
  }
}

export const $settings = map<SettingsType>(DEFAULT_SETTINGS_VALUES)

export const setSettingsValues = (values: Partial<SettingsType>) => {
  for (const key in values) {
    $settings.setKey(
      key as keyof SettingsType,
      values[key as keyof SettingsType] as SettingsType[keyof SettingsType],
    )
  }
}
export const $phase = atom<PhaseType>('pomodoro')

export const updatePhase = (newPhase: PhaseType) => {
  $phase.set(newPhase)
}

export const handleNewId = (newId: UUID) => {
  $counter.set({ ...$counter.get(), id: newId })
}
