import { type Locator, type Page } from '@playwright/test'

import TEST_IDS from '@test/testIds'

export class PomodoroPage {
  readonly page: Page
  readonly testsIds
  readonly startButton: Locator
  readonly resetButton: Locator
  public pauseButton: Locator
  public playButton: Locator
  readonly counterContent: Locator

  constructor(page: Page) {
    this.page = page
    this.testsIds = TEST_IDS.pomodoro
    this.startButton = page.getByRole('button', { name: 'Start' })
    this.playButton = page.getByRole('button', { name: 'Continue' })
    this.pauseButton = page.getByRole('button', { name: 'Pause' })
    this.resetButton = page.getByRole('button', { name: 'Reset' })
    this.counterContent = page.getByTestId(this.testsIds.counterContent)
  }

  async goto() {
    return this.page.goto('/')
  }

  async clickStartButton() {
    await this.startButton.click()
    this.pauseButton = this.page.getByRole('button', { name: 'Pause' })
  }

  async clickPauseButton() {
    await this.pauseButton.click()
    this.playButton = this.page.getByRole('button', { name: 'Continue' })
  }

  async clickPlayButton() {
    await this.playButton.click()
    this.pauseButton = this.page.getByRole('button', { name: 'Pause' })
  }

  async clickResetButton() {
    await this.resetButton.click()
  }
}
