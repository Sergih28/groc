import { DEFAULT_STATE_VALUES } from '@store/constants'
import type { StateType } from '@store/types'
import { map } from 'nanostores'

const $state = map<StateType>(DEFAULT_STATE_VALUES)

export default $state
