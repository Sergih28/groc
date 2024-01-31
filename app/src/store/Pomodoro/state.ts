import { map } from 'nanostores'

import { DEFAULT_STATE_VALUES } from '@store/constants'
import type { StateType } from '@store/types'

const $state = map<StateType>(DEFAULT_STATE_VALUES)

export default $state
