import { useFormik } from 'formik'
import Button from '@components/Button'
import InputNumber from './ui/input/InputNumber'
import InputRadio from './ui/input/InputRadio'

type SETTING_TYPE = {
  name: string
  description: string
}

type SETTINGS_OPTIONS_TYPE = {
  POMODORO_DURATION: SETTING_TYPE
  BREAK_DURATION: SETTING_TYPE
  LONG_BREAK_DURATION: SETTING_TYPE
  MODE: SETTING_TYPE
}

type Values = {
  pomodoroDuration: number
  breakDuration: number
  longBreakDuration: number
  mode: MODE_OPTIONS_TYPE
}

const SETTINGS_OPTIONS: SETTINGS_OPTIONS_TYPE = {
  POMODORO_DURATION: {
    name: 'pomodoroDuration',
    description: 'Pomodoro duration (minutes)',
  },
  BREAK_DURATION: {
    name: 'breakDuration',
    description: 'Break duration (minutes)',
  },
  LONG_BREAK_DURATION: {
    name: 'longBreakDuration',
    description: 'Long break duration (minutes)',
  },
  MODE: {
    name: 'mode',
    description: 'Select mode',
  },
} as const

const MODE_OPTIONS = {
  MANUAL: 'manual',
  AUTO: 'auto',
} as const

type MODE_OPTIONS_TYPE = (typeof MODE_OPTIONS)[keyof typeof MODE_OPTIONS]

export const DEFAULT_SETTINGS_VALUES = {
  POMODORO_DURATION: 25,
  BREAK_DURATION: 5,
  LONG_BREAK_DURATION: 15,
  MODE: MODE_OPTIONS.MANUAL,
} as const

const SETTINGS_STYLES = {
  FORM: 'max-w-xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md',
  RADIO_CONTAINER: 'flex items-center justify-center gap-6 mb-4',
} as const

const validate = (values: Values) => {
  const errors: { [key: string]: string } = {}
  const INPUT_NUMBERS = [
    SETTINGS_OPTIONS.POMODORO_DURATION.name,
    SETTINGS_OPTIONS.BREAK_DURATION.name,
    SETTINGS_OPTIONS.LONG_BREAK_DURATION.name,
  ]
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
    <form
      data-testid={'settings-form'}
      onSubmit={formik.handleSubmit}
      className={SETTINGS_STYLES.FORM}
    >
      <InputNumber
        value={formik.values.pomodoroDuration}
        name={SETTINGS_OPTIONS.POMODORO_DURATION.name}
        description={SETTINGS_OPTIONS.POMODORO_DURATION.description}
        handleChange={formik.handleChange}
        error={formik.errors.pomodoroDuration}
      />
      <InputNumber
        value={formik.values.breakDuration}
        name={SETTINGS_OPTIONS.BREAK_DURATION.name}
        description={SETTINGS_OPTIONS.BREAK_DURATION.description}
        handleChange={formik.handleChange}
        error={formik.errors.breakDuration}
      />
      <InputNumber
        value={formik.values.longBreakDuration}
        name={SETTINGS_OPTIONS.LONG_BREAK_DURATION.name}
        description={SETTINGS_OPTIONS.LONG_BREAK_DURATION.description}
        handleChange={formik.handleChange}
        error={formik.errors.longBreakDuration}
      />
      <div>
        <span className="font-bold">Mode:</span>
        <div className={SETTINGS_STYLES.RADIO_CONTAINER}>
          {Object.values(MODE_OPTIONS).map((option) => {
            return (
              <InputRadio
                description={option}
                inputName="mode"
                handleChange={formik.handleChange}
                checked={formik.values.mode === option}
              />
            )
          })}
        </div>
      </div>
      <Button type="button" styles="delete" handleClick={() => {}}>
        DANGER: REMOVE DATA
      </Button>
      <Button type="submit" styles="submit" handleClick={() => {}}>
        Submit
      </Button>
    </form>
  )
}

export default Settings
