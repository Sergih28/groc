import { THEMES } from './constants'

export type ThemeType = (typeof THEMES)[keyof typeof THEMES]
