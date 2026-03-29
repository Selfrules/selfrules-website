#!/usr/bin/env bash
# build.sh — Builds the project from /tmp to avoid FUSE lock file issues
# Usage: bash scripts/build.sh

set -euo pipefail

MOUNT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="/tmp/selfrules-clean"
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

echo "📦 Copying project to $TMP_DIR..."
rm -rf "$TMP_DIR"
cp -r "$MOUNT_DIR" "$TMP_DIR"
rm -rf "$TMP_DIR/.next"

echo "🔨 Building..."
cd "$TMP_DIR"
npx next build

echo -e "${GREEN}✅ Build successful${NC}"
echo "Output in $TMP_DIR/.next"
