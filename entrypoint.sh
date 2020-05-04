#!/usr/bin/ash

envsubst < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/app.conf

exec nginx -g 'daemon off;'
