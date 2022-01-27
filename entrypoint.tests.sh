#!/usr/bin/ash

echo "🚨 Running prettier & eslint"

yarn format:check

yarn lint:v2:check

echo "✅ Running tests"

yarn test --ci
