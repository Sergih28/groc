import { GoMute, GoUnmute } from 'react-icons/go'

import { Button } from '@components/elements/button'

import { pomodoroStore } from '@store/pomodoro'

const MuteButton = () => {
  const { handleMute } = pomodoroStore.actions
  const { sound } = pomodoroStore.state.get()

  return (
    <Button className="mute__button" onClick={handleMute}>
      {sound ? <GoUnmute /> : <GoMute />}
    </Button>
  )
}

export default MuteButton
