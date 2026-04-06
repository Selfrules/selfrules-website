#!/usr/bin/env bash
# build.sh — Build da /tmp per evitare problemi FUSE
#
# Se /tmp/selfrules-clean esiste (da sync.sh), lo usa.
# Altrimenti copia dal mount.
#
# Usage: bash scripts/build.sh

set -euo pipefail

MOUNT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="/tmp/selfrules-clean"

GREEN='\033[0;32m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

if [ ! -d "$TMP_DIR" ]; then
  echo -e "${CYAN}📦 Copia progetto in $TMP_DIR...${NC}"
  cp -r "$MOUNT_DIR" "$TMP_DIR"
fi

# Sync latest changes from mount
rsync -a \
  --exclude='.git' \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.vercel' \
  "$MOUNT_DIR/" "$TMP_DIR/"

rm -rf "$TMP_DIR/.next"

cd "$TMP_DIR"

# Install deps if needed
if [ ! -d "node_modules" ]; then
  echo -e "${CYAN}📦 npm install...${NC}"
  npm install 2>&1 | tail -3
fi

echo -e "${CYAN}🔨 Building...${NC}"
npx next build

echo -e "${GREEN}✅ Build ok${NC}"
