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

1. **Install bun:**
   Ensure you have [bun](https://bun.sh/) installed.

2. **Install project dependencies:**
   Run `bun install` to install project dependencies.

3. **Install Playwright dependencies:**
   Run `bunx playwright install` to install Playwright dependencies.

### 🔩 Optional Setup

1. **Install tmux and tmuxinator locally:**
   To run 'bun dev', ensure you have tmux and tmuxinator installed locally.
   - **Tmux:** Install Tmux using your package manager
     (e.g., `apt install tmux` for a Debian/Ubuntu based distro).
   - **Tmuxinator:** Follow the installation instructions for [Tmuxinator][1].

## 🧞 Commands

- `bun dev`: start tmuxinator project template.
- `bun dev:all`: start the development server, including storybook (and tailwind).
- `bun test:e2e`: run playwright tests in headless and watch mode.
- `bun test:e2e:ui`: run playwright tests in UI mode.
- `bun lint`: run eslint on all project and test files.
- `bun lint:fix`: run eslint and fix errors on all project and test files.
- `bun prettier:fix`: run prettier and autoformat files.
- `bun lint:docs`: run markdownlint on all markdown files outside the `/app` folder.
- `bun lint:docs:fix`: run markdownlint and fix errors all markdown files
  outside the `/app` folder.
- `bun lint:md`: run markdownlint on all markdown files inside the `/app` folder.
- `bun lint:md:fix`: run markdownlint and fix errors all markdown files inside
  the `/app` folder.
- `bun lint:commit`: run commitlint on the last commit. This is just
  informative, but it does not need to be used as a proper husky hook will be set
  up for it.
- `bun storybook`: run storybook. This should not be used standalone as it will
  be missing tailwind.
- `bun tailwind`: run tailwind output in watch mode. This is needed for
  storybook.

[1]: https://github.com/tmuxinator/tmuxinator
