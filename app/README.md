# 🟡 App

## 🚀 Project Structure

```text
/
├── src/
│   ├── components/
│   ├── layouts/
│   └── pages/
```

## ⚙️ Initial Setup

1. **Install pnpm:**
   Ensure you have [pnpm](https://pnpm.io/) installed.

2. **Install project dependencies:**
   Run `pnpm install` to install project dependencies.

3. **Install Playwright dependencies:**
   Run `pnpmx playwright install` to install Playwright dependencies.

### 🔩 Optional Setup

1. **Install tmux and tmuxinator locally:**
   To run 'pnpm dev', ensure you have tmux and tmuxinator installed locally.
   - **Tmux:** Install Tmux using your package manager
     (e.g., `apt install tmux` for a Debian/Ubuntu based distro).
   - **Tmuxinator:** Follow the installation instructions for [Tmuxinator][1].

## 🧞 Commands

- `pnpm dev`: start tmuxinator project template.
- `pnpm dev:all`: start the development server, including storybook (and tailwind).
- `pnpm test:e2e`: run playwright tests in headless and watch mode.
- `pnpm test:e2e:ui`: run playwright tests in UI mode.
- `pnpm lint`: run eslint on all project and test files.
- `pnpm lint:fix`: run eslint and fix errors on all project and test files.
- `pnpm prettier:fix`: run prettier and autoformat files.
- `pnpm lint:docs`: run markdownlint on all markdown files outside the `/app` folder.
- `pnpm lint:docs:fix`: run markdownlint and fix errors all markdown files
  outside the `/app` folder.
- `pnpm lint:md`: run markdownlint on all markdown files inside the `/app` folder.
- `pnpm lint:md:fix`: run markdownlint and fix errors all markdown files inside
  the `/app` folder.
- `pnpm lint:commit`: run commitlint on the last commit. This is just
  informative, but it does not need to be used as a proper husky hook will be set
  up for it.
- `pnpm storybook`: run storybook. This should not be used standalone as it will
  be missing tailwind.
- `pnpm tailwind`: run tailwind output in watch mode. This is needed for
  storybook.

[1]: https://github.com/tmuxinator/tmuxinator
