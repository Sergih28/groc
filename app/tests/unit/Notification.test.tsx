import Notification from '@components/Notification/'
import Button from '@atoms/Buttons/Button'
import { toast } from 'sonner'
import { screen, render, fireEvent, cleanup } from '@testing-library/react'

const NotificationWrapper = ({ message = 'Notification message' }: { message?: string }) => {
  return (
    <>
      <Notification />
      <Button handleClick={() => toast(message)}>Click to notify</Button>
    </>
  )
}

describe('Notification component test', () => {
  afterEach(() => {
    cleanup()
  })

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
