#!/usr/bin/ash

set -e

envsubst < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

# Non-expanded expressions (single quotes) on purpose.
envsubst '
${GRAPHQL_ENDPOINT}
${PUBLIC_SENTRY_DSN}
${MATOMO_BASE_URL}
${MATOMO_SITE_ID}
' < /opt/nginx/build/index.html > /opt/nginx/build/index.html.subst

cp -pf /opt/nginx/build/index.html.subst /opt/nginx/build/index.html

exec nginx -g 'daemon off;'
