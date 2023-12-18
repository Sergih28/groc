import { useFormik } from 'formik'
import Button from '@atoms/Buttons/Button/index'
import { STYLES } from './styles'
import type { Values } from './types'
import { SETTINGS_OPTIONS, DEFAULT_SETTINGS_VALUES, MODE_OPTIONS } from './constants'
import {
  InputBreakDuration,
  InputLongBreakDuration,
  InputRadioMode,
  InputPomodoroDuration,
} from './components'

const validate = (values: Values) => {
  const errors: { [key: string]: string } = {}
  const INPUT_NUMBERS = [
    SETTINGS_OPTIONS.POMODORO_DURATION.name,
    SETTINGS_OPTIONS.BREAK_DURATION.name,
    SETTINGS_OPTIONS.LONG_BREAK_DURATION.name,
  ] as const
  const ERRORS_MESSAGES = {
    BELOW_ZERO: 'Must be greater than 0',
    NOT_NUMBER: 'Must be a number',
  }

  for (const input of INPUT_NUMBERS) {
    const value = values[input]
    if (!Number(value)) {
      errors[input] = ERRORS_MESSAGES.NOT_NUMBER
    } else if (Number(value) <= 0) {
      errors[input] = ERRORS_MESSAGES.BELOW_ZERO
    }
  }

  return errors
}

const Settings = () => {
  const formik = useFormik({
    initialValues: {
      pomodoroDuration: DEFAULT_SETTINGS_VALUES.POMODORO_DURATION,
      breakDuration: DEFAULT_SETTINGS_VALUES.BREAK_DURATION,
      longBreakDuration: DEFAULT_SETTINGS_VALUES.LONG_BREAK_DURATION,
      mode: MODE_OPTIONS.MANUAL,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form data-testid={'settings-form'} onSubmit={formik.handleSubmit} className={STYLES.FORM}>
      <InputPomodoroDuration
        value={formik.values.pomodoroDuration}
        handleChange={formik.handleChange}
        error={formik.errors.pomodoroDuration}
      />
      <InputBreakDuration
        value={formik.values.breakDuration}
        handleChange={formik.handleChange}
        error={formik.errors.breakDuration}
      />
      <InputLongBreakDuration
        value={formik.values.longBreakDuration}
        handleChange={formik.handleChange}
        error={formik.errors.longBreakDuration}
      />
      <div>
        <span className="font-bold">{SETTINGS_OPTIONS.MODE.description}:</span>
        <div className={STYLES.RADIO_CONTAINER}>
          {Object.values(MODE_OPTIONS).map((option) => {
            return (
              <InputRadioMode
                value={option}
                checked={option === formik.values.mode}
                handleChange={formik.handleChange}
              />
            )
          })}
        </div>
      </div>
      <Button type="button" styles="delete" handleClick={() => {}}>
        {SETTINGS_OPTIONS.DELETE.description}
      </Button>
      <Button type="submit" styles="submit" handleClick={() => {}}>
        {SETTINGS_OPTIONS.SUBMIT.description}
      </Button>
    </form>
  )
}

export default Settings
