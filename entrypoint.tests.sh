#!/usr/bin/ash

echo "🚨 Running prettier & eslint"

yarn format:check

yarn lint:check

echo "✅ Running tests"

yarn test --ci
