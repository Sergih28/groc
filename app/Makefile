.PHONY: init
init:
	docker compose build --no-cache

.PHONY: up
up:
	docker compose up -d

.PHONY: stop
stop:
	docker compose stop

.PHONY: ps
ps:
	docker ps

.PHONY: list
list:
	@echo "+------------------------+--------------------------------------------+"
	@echo "| Container Name         | Description                                |"
	@echo "+------------------------+--------------------------------------------+"
	@echo "| groc-prod              | Web build - Production environment         |"
	@echo "| groc-dev               | Web dev - Development environment          |"
	@echo "| groc-tests             | Unit tests - Unit testing environment      |"
	@echo "| groc-styles            | Tailwind - CSS processing environment      |"
	@echo "| groc-storybook         | Storybook - UI component explorer          |"
	@echo "| groc-playwright        | Playwright - E2E testing environment       |"
	@echo "| groc-playwright-ui     | Playwright - E2E browser testing results   |"
	@echo "+------------------------+--------------------------------------------+"

.PHONY: help
help:
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| Command                | Description                                   |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make dev-all           | Start all the necessary containers for        |"
	@echo "|                        | developing                                    |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make prod              | Build the web application for production.     |"
	@echo "|                        | This command compiles and optimizes the code  |"
	@echo "|                        | for production deployment.                    |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make dev               | Start the web application in development mode.|"
	@echo "|                        | This command sets up a development server     |"
	@echo "|                        | with hot-reloading for faster development.    |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make bash              | Enter dev container shell.                     |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make tests             | Run unit tests.                               |"
	@echo "|                        | This command executes the unit test suite.    |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make tests-coverage    | Run unit tests coverage.                      |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make styles            | Process Tailwind CSS.                         |"
	@echo "|                        | This command compiles and processes           |"
	@echo "|                        | Tailwind CSS for styling.                     |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make storybook         | Start Storybook for UI components.            |"
	@echo "|                        | This command launches Storybook for viewing   |"
	@echo "|                        | and testing UI components.                    |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make playwright        | Run End-to-End tests with Playwright.         |"
	@echo "|                        | This command executes End-to-End tests using  |"
	@echo "|                        | the Playwright testing framework.             |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make playwright-report | Show tests reports on the browser.            |"
	@echo "|                        | Open http://localhost:9323 too see            |"
	@echo "|                        | the reports                                   |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make playwright-ui     | Run UI End-to-End tests with Playwright.      |"
	@echo "|                        | Similar to 'make playwright', but focused on  |"
	@echo "|                        | UI-specific End-to-End tests.                 |"
	@echo "+------------------------+-----------------------------------------------+"
	@echo "| make logs-{container}  | View logs for the specified container.        |"
	@echo "+------------------------+-----------------------------------------------+"

.PHONY: prod dev-all dev bash tests tests-coverage styles storybook playwright playwright-report playwright-ui
prod:
	docker compose up -d prod
	docker exec -it groc-prod pnpm build:start 

dev-all: 
	tmuxinator start --project-config=./config/tmuxinator.yml

dev:
	docker compose up -d dev
	docker exec -it groc-dev pnpm start --host

bash:
	docker compose up -d dev
	docker exec -it groc-dev bash

tests:
	docker compose up -d tests
	docker exec -it groc-tests pnpm test:unit:watch

tests-coverage:
	docker compose up -d tests
	docker exec -it groc-tests pnpm test:unit:coverage

styles:
	docker compose up -d styles
	docker exec -it groc-styles pnpm tailwind

storybook:
	docker compose up -d storybook
	docker exec -it groc-storybook pnpm storybook

playwright:
	docker compose up -d playwright 
	docker exec -it groc-playwright pnpm test:e2e

playwright-report:
	docker compose up -d playwright 
	@echo ============================ IMPORTANT! =============================
	@echo ===                                                               ===
	@echo === Visit http://localhost:9323 (not 0.0.0.0) to see the reports! ===
	@echo ===                                                               ===
	@echo =====================================================================
	docker exec -it groc-playwright pnpm test:e2e:report --host 0.0.0.0

playwright-ui:
	docker compose up -d playwright
	docker exec -it groc-playwright pnpm test:e2e:ui

.PHONY: logs-dev logs-prod logs-tests logs-styles logs-storybook logs-playwright logs-playwright-ui
logs-dev:
	docker logs groc-dev

logs-prod:
	docker logs groc-prod

logs-tests:
	docker logs groc-tests

logs-styles:
	docker logs groc-styles

logs-storybook:
	docker logs groc-storybook

logs-playwright:
	docker logs groc-playwright