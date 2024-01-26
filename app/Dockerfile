ARG NODE_VERSION=20.6.1
ARG PNPM_VERSION=8.14.1
ARG PLAYWRIGHT_VERSION=1.40.0

FROM node:${NODE_VERSION}-bookworm

ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

WORKDIR /usr/src/app

RUN adduser --disabled-password groc
RUN chown -R groc:groc /usr/src/app

RUN npm install -g pnpm@${PNPM_VERSION}

COPY . .

RUN pnpm install

RUN npx -y playwright@${PLAYWRIGHT_VERSION} install --with-deps

USER groc

ENV HOST=0.0.0.0
