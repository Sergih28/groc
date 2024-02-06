import { fireEvent, render, screen } from '@testing-library/react'
import { toast } from 'sonner'

import { Button } from '@components/elements/button/'
import Notification from '@components/elements/notification'

const NotificationWrapper = ({ message = 'Notification message' }: { message?: string }) => {
  return (
    <>
      <Notification />
      <Button onClick={() => toast(message)}>Click to notify</Button>
    </>
  )
}

describe('Notification component test', () => {
  test('render the Notification component', () => {
    render(<NotificationWrapper />)
  })

  test('given a certain message and firing the click event, render the notification with that message', async () => {
    const message = 'Checking the notification component'

    render(<NotificationWrapper message={message} />)

    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)

    expect(await screen.findByText(message)).toBeInTheDocument()
  })
})
