import { expect, test } from '@playwright/test'

test('has title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Groc/)
})

test.describe('navbar navigation', () => {
  test('clicking the Home navbar element redirects to "/"', async ({ page }) => {
    await page.goto('/')

    const homeLink = page.getByRole('link', { name: 'Home' })

    await homeLink.click()

    await expect(page).toHaveURL('/en/')
  })
})
