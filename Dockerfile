# Building stage

FROM node:16.13.2-alpine AS builder

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat libtool automake autoconf nasm g++ make libpng-dev

RUN mkdir -p /opt/po8klasie

WORKDIR /opt/po8klasie

COPY package.json yarn.lock .yarnrc.yml ./

# https://yarnpkg.com/features/zero-installs#how-do-you-reach-this-zero-install-state-youre-advocating-for
COPY .yarn ./.yarn

RUN yarn install --immutable

COPY tsconfig.json ./
COPY next.config.js next-env.d.ts ./
COPY postcss.config.js tailwind.config.js ./
COPY public ./public
COPY src ./src
COPY sentry.client.config.ts sentry.server.config.ts ./
COPY next-i18next.config.js ./

RUN yarn build

COPY server.js ./

COPY .prettierrc.js .prettierignore ./
COPY .eslintrc.js .eslintignore ./
COPY jest.config.js ./

COPY entrypoint.tests.sh ./

ENTRYPOINT ["/bin/sh", "-c"]

# Final image stage

FROM node:16.13.2-alpine AS runner

LABEL maintainer="mlazowik@gmail.com"

RUN mkdir -p /opt/po8klasie

WORKDIR /opt/po8klasie

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=builder /opt/po8klasie/next.config.js ./
COPY --from=builder /opt/po8klasie/public ./public
COPY --from=builder /opt/po8klasie/.next ./.next
COPY --from=builder /opt/po8klasie/node_modules ./node_modules
COPY --from=builder /opt/po8klasie/package.json ./package.json
COPY --from=builder /opt/po8klasie/server.js ./server.js
COPY --from=builder /opt/po8klasie/next-i18next.config.js ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

# https://nextjs.org/telemetry
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start-production"]
