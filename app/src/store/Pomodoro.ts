import type { UUID } from 'crypto'

import { atom } from 'nanostores'

import type { CounterType, PhaseType, SettingsType } from './types'

import { DEFAULT_COUNTER_VALUES, DEFAULT_SETTINGS_VALUES } from './constants'

export const $counter = atom<CounterType>(DEFAULT_COUNTER_VALUES)

export const setCounterValue = (newCounterValue: number) => {
  $counter.set({ ...$counter.get(), counterValue: newCounterValue })
}

export const updateCounter = (updatedCounter: Partial<CounterType>) => {
  $counter.set({ ...$counter.get(), ...updatedCounter })
}

export const $settings = atom<SettingsType>(DEFAULT_SETTINGS_VALUES)

export const updateSettings = (updatedSettings: Partial<SettingsType>) => {
  $settings.set({ ...$settings.get(), ...updatedSettings })
}
export const $phase = atom<PhaseType>('pomodoro')

export const updatePhase = (newPhase: PhaseType) => {
  $phase.set(newPhase)
}

export const handleNewId = (newId: UUID) => {
  $counter.set({ ...$counter.get(), id: newId })
}
