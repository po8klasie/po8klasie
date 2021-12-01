#!/usr/bin/ash

echo "🚨 Running prettier"

yarn format:check

echo "✅ Running tests"

yarn test --ci