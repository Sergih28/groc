# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.6.1
ARG PNPM_VERSION=8.14.1

FROM node:${NODE_VERSION}-alpine

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

# Install pnpm.
RUN --mount=type=cache,target=/root/.npm \
    npm install -g pnpm@${PNPM_VERSION}

COPY . .

RUN pnpm install
RUN pnpm run build

ENV HOST=0.0.0.0
ENV PORT=3000
EXPOSE 3000
CMD echo 'asldfkj' && node ./dist/server/entry.mjs
