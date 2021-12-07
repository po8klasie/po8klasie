#!/usr/bin/ash

set -e

# Non-expanded expressions (single quotes) on purpose.
envsubst '
${NGINX_SERVER_NAME}
${NGINX_BACK_URL}
'< /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

envsubst '
${GRAPHQL_ENDPOINT}
${PUBLIC_SENTRY_DSN}
${MATOMO_BASE_URL}
${MATOMO_SITE_ID}
' < /opt/nginx/out/warszawa/legacy.html > /opt/nginx/out/warszawa/legacy.html.subst

cp -pf /opt/nginx/out/warszawa/legacy.html.subst /opt/nginx/out/warszawa/legacy.html

exec nginx -g 'daemon off;'
