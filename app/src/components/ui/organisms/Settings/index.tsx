import Button from '@atoms/Buttons/Button/index'
import Switch from '@atoms/Switch'
import { useFormik } from 'formik'

import { $settings } from '@store/Pomodoro'
import { useStore } from '@nanostores/react'

import type { Values } from './types'

import {
  InputBreakDuration,
  InputLongBreakDuration,
  InputPomodoroDuration,
  InputRadioMode,
} from './components'
import { DEFAULT_SETTINGS_VALUES, MODE_OPTIONS, SETTINGS_OPTIONS } from './constants'

import { STYLES } from './styles'
import { calculateMinutesFromSeconds } from '@utils/numbers'

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
  const settings = useStore($settings)

  const formik = useFormik({
    initialValues: {
      pomodoroDuration: calculateMinutesFromSeconds(settings.pomodoroDuration),
      breakDuration: calculateMinutesFromSeconds(settings.breakDuration),
      longBreakDuration: calculateMinutesFromSeconds(settings.breakDuration),
      mode: settings.mode,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values))
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
      <div>
        <Switch
          isOn={true}
          switchLabel="Is couting up?"
          inputName={SETTINGS_OPTIONS.COUNTING_UP.name}
          handleChange={formik.handleChange}
        />
      </div>
      <Button type="button" styles="delete" handleClick={() => {}}>
        {SETTINGS_OPTIONS.DELETE.description}
      </Button>
      <Button type="submit" styles="submit" handleClick={() => {}}>
        {SETTINGS_OPTIONS.SUBMIT.description}
      </Button>
      <div>{JSON.stringify(settings)}</div>
    </form>
  )
}

export default Settings
