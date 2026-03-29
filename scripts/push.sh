#!/usr/bin/env bash
# push.sh — Commit e push sicuro, sempre basato su origin/main
#
# Workflow:
#   1. Se /tmp/selfrules-clean non esiste, lancia sync.sh prima
#   2. Stage tutto, mostra diff, chiede conferma
#   3. Commit e push
#   4. Pulisce il PAT dalla remote URL
#
# Usage:
#   bash scripts/push.sh "commit message"
#   bash scripts/push.sh "commit message" --yes   # skip conferma
#
# Se --files è passato, aggiunge solo quei file:
#   bash scripts/push.sh "fix mobile" --files "src/components/ui/Button.tsx src/components/sections/Hero.tsx"

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MOUNT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TMP_DIR="/tmp/selfrules-clean"
COMMIT_MSG="${1:-"update"}"
AUTO_YES=false
SPECIFIC_FILES=""

# Parse flags
shift || true
while [[ $# -gt 0 ]]; do
  case $1 in
    --yes|-y) AUTO_YES=true; shift ;;
    --files) SPECIFIC_FILES="$2"; shift 2 ;;
    *) shift ;;
  esac
done

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
NC='\033[0m'

# Ensure clean working copy exists
if [ ! -d "$TMP_DIR/.git" ]; then
  echo -e "${YELLOW}⚠️  /tmp/selfrules-clean non trovato. Lancio sync.sh...${NC}"
  bash "$SCRIPT_DIR/sync.sh"
else
  # Sync latest mount changes
  echo -e "${CYAN}🔄 Sync mount → /tmp...${NC}"
  rsync -a \
    --exclude='.git' \
    --exclude='.next' \
    --exclude='node_modules' \
    --exclude='.vercel' \
    "$MOUNT_DIR/" "$TMP_DIR/"
fi

cd "$TMP_DIR"

# Clean stale lock files
find .git -name "*.lock" -delete 2>/dev/null || true

# Stage
if [ -n "$SPECIFIC_FILES" ]; then
  echo -e "${CYAN}📎 Stage file specifici...${NC}"
  for f in $SPECIFIC_FILES; do
    git add "$f"
  done
else
  git add -A
fi

# Check if there's anything to commit
if git diff --cached --quiet; then
  echo -e "${GREEN}✅ Niente da committare. Tutto è già su remote.${NC}"
  exit 0
fi

# Show what's being committed
echo ""
echo -e "${YELLOW}📝 Modifiche da committare:${NC}"
git diff --cached --stat
echo ""

# Confirm
if [ "$AUTO_YES" = false ]; then
  echo -e "Commit message: ${CYAN}$COMMIT_MSG${NC}"
  echo -n "Procedo? [Y/n] "
  read -r CONFIRM
  if [[ "$CONFIRM" =~ ^[Nn] ]]; then
    echo "Annullato."
    git reset HEAD 2>/dev/null
    exit 0
  fi
fi

# Commit
git commit -m "$COMMIT_MSG

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"

# Push (PAT is already in remote URL from clone)
echo -e "${CYAN}🚀 Push a origin/main...${NC}"
if git push origin main 2>&1; then
  echo -e "${GREEN}✅ Push riuscito${NC}"
else
  echo -e "${RED}❌ Push fallito. Probabilmente il remote è andato avanti.${NC}"
  echo -e "   Lancia ${CYAN}bash scripts/sync.sh${NC} e riprova."
  exit 1
fi

# Clean PAT from remote URL (sicurezza)
CLEAN_URL=$(git remote get-url origin | sed 's|https://[^@]*@|https://|')
git remote set-url origin "$CLEAN_URL" 2>/dev/null || true
