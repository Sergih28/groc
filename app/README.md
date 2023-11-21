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

## 🧞 Commands

- `bun dev`: start the development server.
- `bun test:e2e`: run playwright tests in headless mode.
- `bun test:e2e:ui`: run playwright tests in UI mode.
- `bun lint`: run eslint on all project and test files.
- `bun lint:fix`: run eslint and fix errors on all project and test files.
- `bun prettier:fix`: run prettier and autoformat files.
- `bun lint:md`: run markdownlint on all markdown files, including files outside the `/app` folder.
- `bun lint:md:fix`: run markdownlint and fix all markdown files, including files outside the `/app` folder.
- `bun lint:commit`: run commitlint on the last commit. This is just informative, but it does not need to be used as a proper husky hook will be set up for it.

