#!/usr/bin/ash

echo "🚨 Running prettier & eslint"

yarn format:check

yarn lint:website:check

echo "✅ Running tests"

yarn test --ci