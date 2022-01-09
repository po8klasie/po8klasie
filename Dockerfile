# JS building stage

FROM node:14.17.5-alpine AS js-build

ENV SOURCE /opt/warsawlo
RUN mkdir -p $SOURCE
WORKDIR $SOURCE

RUN apk add libtool automake autoconf nasm g++ make libpng-dev

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig.json .babelrc ./
COPY next.config.js next-env.d.ts ./
COPY postcss.config.js tailwind.config.js ./
COPY public ./public
COPY src ./src
COPY sentry.client.config.ts sentry.server.config.ts ./

RUN yarn prepare-bundle

COPY .prettierrc.js .prettierignore ./
COPY jest.config.js ./

COPY entrypoint.ci.sh .

ENTRYPOINT ["/bin/sh", "-c"]

# Final image stage

FROM nginx:1.20.1

LABEL maintainer="mlazowik@gmail.com"

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/
COPY nginx-app.conf /etc/nginx/conf.d/app.conf.template

ENV NGINX_ROOT /opt/nginx
RUN mkdir -p $NGINX_ROOT
WORKDIR $NGINX_ROOT

COPY entrypoint.sh .

COPY --from=js-build /opt/warsawlo/out ./out

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["sh /opt/nginx/entrypoint.sh"]
