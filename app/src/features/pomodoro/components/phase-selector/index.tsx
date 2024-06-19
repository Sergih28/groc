import { useStore } from '@nanostores/react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@components/elements/alert-dialog'
import { Button } from '@components/elements/button'

import { getLangFromWindowUrl, useTranslations } from '@services/i18n/utils'

import { pomodoroStore } from '@store/pomodoro'
import { handlePhase } from '@store/pomodoro/actions'

import { BUTTON_TEXT } from './constants'

const PhaseSelector = () => {
  const lang = getLangFromWindowUrl()
  const t = useTranslations(lang)

  const { phase } = useStore(pomodoroStore.state)

  const buttonPhases = ['pomodoro', 'break', 'longBreak'] as const

  return (
    <div className="pomodoro__buttons">
      {buttonPhases.map((buttonPhase) => {
        const styles =
          buttonPhase === phase ? 'pomodoro__button pomodoro__button--selected' : 'pomodoro__button'

        if (buttonPhase === phase) {
          return (
            <Button key={buttonPhase} className={styles}>
              {BUTTON_TEXT[buttonPhase]}
            </Button>
          )
        }

        return (
          <AlertDialog key={buttonPhase}>
            <AlertDialogTrigger>
              <Button className={styles}>{BUTTON_TEXT[buttonPhase]}</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>{t('phaseDialog.title')}</AlertDialogTitle>
                <AlertDialogDescription>{t('phaseDialog.description')}</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>{t('phaseDialog.cancel')}</AlertDialogCancel>
                <AlertDialogAction onClick={() => handlePhase(buttonPhase)}>
                  {t('phaseDialog.action')}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )
      })}
    </div>
  )
}

export default PhaseSelector
