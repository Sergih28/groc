import { map } from 'nanostores'

import type { StateType } from './types'

import { DEFAULT_STATE_VALUES } from './constants'

const $state = map<StateType>(DEFAULT_STATE_VALUES)

export default $state
