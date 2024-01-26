ARG NODE_VERSION=20.6.1
ARG PNPM_VERSION=8.14.1
ARG PLAYWRIGHT_VERION=1.40.0

FROM node:${NODE_VERSION}-bookworm

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

COPY . .

RUN pnpm install
RUN npx playwright install --with-deps

RUN adduser --disabled-password groc
RUN chown -R groc:groc /usr/src/app

USER groc

ENV HOST=0.0.0.0
