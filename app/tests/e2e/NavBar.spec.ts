import { test, expect } from '@playwright/test'
const URL = 'http://localhost:4321'

test('has title', async ({ page }) => {
  await page.goto(URL)

  await expect(page).toHaveTitle(/Groc/)
})

test.describe('navbar navigation', () => {
  test('clicking the Home navbar element redirects to "/"', async ({ page }) => {
    await page.goto(URL)

    const homeLink = page.getByRole('link', { name: 'Home' })

    await homeLink.click()

    await expect(page).toHaveURL(URL + '/')
  })
})
