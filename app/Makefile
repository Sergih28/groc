.PHONY: init 
init: ## Build Docker image without using the cache 
	docker compose build --no-cache

.PHONY: up
up: ## Start Docker containers
	docker compose up -d

.PHONY: stop
stop: ## Stop Docker containers
	docker compose stop

.PHONY: ps
ps: ## Show running Docker containers
	docker ps

.PHONY: list
list: ## List available Makefile commands
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

.PHONY: prod dev-all dev bash install tests tests-coverage styles storybook playwright playwright-report playwright-ui postgresql pgadmin
prod: ## Build the web application for production.  
	docker compose up -d prod
	docker exec -it groc-prod pnpm build:start

dev-all: ## Start all the necessary containers for developing
	tmuxinator start --project-config=./config/tmuxinator.yml

dev: ## Start the web application in development mode
	docker compose up -d dev
	docker exec -it groc-dev pnpm start --host

bash: ## Enter dev container shell
	docker compose up -d dev
	docker exec -it groc-dev bash

install: ## Install dependencies in dev container
	docker compose up -d dev
	docker exec -it groc-dev pnpm install --frozen-lockfile

tests: ## Run unit tests
	docker compose up -d tests
	docker exec -it groc-tests pnpm test:unit:watch

tests-coverage: ## Run unit tests coverage 
	docker compose up -d tests
	docker exec -it groc-tests pnpm test:unit:coverage

styles: ## Process Tailwind CSS
	docker compose up -d styles
	docker exec -it groc-styles pnpm tailwind

storybook: ## Start Storybook for UI components
	docker compose up -d storybook
	docker exec -it groc-storybook pnpm storybook

playwright: ## Run End-to-End tests with Playwright
	docker compose up -d playwright
	docker exec -it groc-playwright pnpm test:e2e


playwright-report: ## Show tests reports on the browser
	docker compose up -d playwright
	@echo ============================ IMPORTANT! =============================
	@echo ===                                                               ===
	@echo === Visit http://localhost:9323 (not 0.0.0.0) to see the reports! ===
	@echo ===                                                               ===
	@echo =====================================================================
	docker exec -it groc-playwright pnpm test:e2e:report --host 0.0.0.0

playwright-ui: ## Run UI End-to-End tests with Playwright
	docker compose up -d playwright
	docker exec -it groc-playwright pnpm test:e2e:ui

postgresql: ## Run PostgreSQL
	docker compose up -d postgresql

pgadmin: ## Run pgAdmin
	docker compose up -d pgadmin

.PHONY: logs-dev logs-prod logs-tests logs-styles logs-storybook logs-playwright logs-playwright-ui
logs-dev: ## View log for dev container
	docker logs groc-dev

logs-prod: ## View log for production container
	docker logs groc-prod

logs-tests: ## View log for tests container
	docker logs groc-tests

logs-styles: ## View log for styles container
	docker logs groc-styles

logs-storybook: ## View log for Storybook container
	docker logs groc-storybook

logs-playwright: ## View log for Playwright container
	docker logs groc-playwright

.PHONY: help
help: ## Show all commands list
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
	
.DEFAULT_GOAL := help
