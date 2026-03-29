#!/usr/bin/env bash
# push.sh — Commits and pushes from /tmp to avoid FUSE git lock issues
# Usage: bash scripts/push.sh "commit message"

set -euo pipefail

MOUNT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="/tmp/selfrules-clean"
COMMIT_MSG="${1:-"update"}"
RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m'

# Copy fresh if /tmp doesn't exist yet
if [ ! -d "$TMP_DIR/.git" ]; then
  echo "📦 Copying project to $TMP_DIR..."
  rm -rf "$TMP_DIR"
  cp -r "$MOUNT_DIR" "$TMP_DIR"
  rm -rf "$TMP_DIR/.next"
fi

cd "$TMP_DIR"

# Clean stale lock files
find .git -name "*.lock" -exec rm -f {} \; 2>/dev/null || true

# Sync any changes from mount that happened after the copy
echo "🔄 Syncing changes from mount..."
rsync -a --exclude='.next' --exclude='.git' --exclude='node_modules' "$MOUNT_DIR/" "$TMP_DIR/"

# Stage, commit, push
git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit."
  exit 0
fi

git commit -m "$COMMIT_MSG"
git push origin main

echo -e "${GREEN}✅ Pushed successfully${NC}"
