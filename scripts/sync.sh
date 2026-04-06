#!/usr/bin/env bash
# sync.sh — Allinea il working copy con origin/main
# Usa a inizio sessione per partire da uno stato pulito.
#
# Cosa fa:
#   1. Clone fresco da remote → /tmp/selfrules-clean
#   2. Copia le modifiche locali dal mount (escluso .git, node_modules, .next)
#   3. Mostra il diff rispetto a origin/main
#   4. Se non ci sono differenze, lo dice e basta
#
# Usage: bash scripts/sync.sh

set -euo pipefail

MOUNT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TMP_DIR="/tmp/selfrules-clean"
REMOTE_URL=$(cd "$MOUNT_DIR" && git remote get-url origin 2>/dev/null)
PAT_FILE="$MOUNT_DIR/.github-pat"

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m'

if [ -z "$REMOTE_URL" ]; then
  echo "❌ Nessun remote configurato in $MOUNT_DIR"
  exit 1
fi

# Inject PAT into clone URL if .github-pat exists
CLONE_URL="$REMOTE_URL"
if [ -f "$PAT_FILE" ] && [ -s "$PAT_FILE" ]; then
  PAT=$(cat "$PAT_FILE" | tr -d '[:space:]')
  CLONE_URL=$(echo "$REMOTE_URL" | sed "s|https://|https://${PAT}@|")
fi

# Step 1: Fresh clone
echo -e "${CYAN}📦 Clone fresco da origin/main...${NC}"
rm -rf "$TMP_DIR"
git clone --depth=1 "$CLONE_URL" "$TMP_DIR" 2>&1 | grep -v "^remote:" | grep -v "^Receiving" | grep -v "^Resolving"

# Clean PAT from remote URL in cloned repo (keep it only in .github-pat)
cd "$TMP_DIR"
git remote set-url origin "$REMOTE_URL"

# Set identity
cd "$TMP_DIR"
git config user.email "mattia@selfrules.org"
git config user.name "Mattia De Luca"

# Unshallow so we can push later
git fetch --unshallow 2>/dev/null || true

# Step 2: Overlay mount changes (exclude git internals, build artifacts, deps)
echo -e "${CYAN}🔄 Overlay modifiche locali dal mount...${NC}"
rsync -a \
  --exclude='.git' \
  --exclude='.next' \
  --exclude='node_modules' \
  --exclude='.vercel' \
  "$MOUNT_DIR/" "$TMP_DIR/"

# Step 3: Show status
echo ""
CHANGED=$(git status --short | wc -l)
if [ "$CHANGED" -eq 0 ]; then
  echo -e "${GREEN}✅ Tutto allineato. Mount e remote sono identici.${NC}"
else
  echo -e "${YELLOW}📝 $CHANGED file differiscono dal remote:${NC}"
  echo ""
  git status --short
  echo ""
  echo -e "${GREEN}✅ Working copy pronta in $TMP_DIR${NC}"
  echo -e "   Usa ${CYAN}bash scripts/push.sh \"messaggio\"${NC} per committare."
fi
