#!/usr/bin/bash

set -e

# Non-expanded expressions (single quotes) on purpose.
vars_to_replace_in_nginx_conf='
${NGINX_SERVER_NAME}
${NGINX_BACK_URL}
'

vars_to_replace_in_html='
${GRAPHQL_ENDPOINT}
${PUBLIC_SENTRY_DSN}
${MATOMO_BASE_URL}
${MATOMO_SITE_ID}
${APP_ENVIRONMENT}
${APP_RELEASE}
'


envsubst "$vars_to_replace_in_nginx_conf" < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

shopt -s nullglob globstar

for html_file in /opt/nginx/**/*.html; do
  envsubst "$vars_to_replace_in_html" < "$html_file" > "$html_file.subst"
  mv "$html_file.subst" "$html_file"
done

exec nginx -g 'daemon off;'
