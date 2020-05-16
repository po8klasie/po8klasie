# JS building stage

FROM node:12-alpine AS js-build

ENV SOURCE /opt/warsawlo
RUN mkdir -p $SOURCE
WORKDIR $SOURCE

ENV REACT_APP_API_URL /api

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY tsconfig.json .
COPY .babelrc .
COPY public ./public
COPY src ./src

RUN yarn build

# Final image stage

FROM nginx:1.17

LABEL maintainer="mlazowik@gmail.com"

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/
COPY nginx-app.conf /etc/nginx/conf.d/app.conf.template

ENV NGINX_ROOT /opt/nginx
RUN mkdir -p $NGINX_ROOT
WORKDIR $NGINX_ROOT

COPY entrypoint.sh .

COPY --from=js-build /opt/warsawlo/build ./build

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["sh /opt/nginx/entrypoint.sh"]
