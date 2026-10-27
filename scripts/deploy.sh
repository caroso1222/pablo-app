#!/usr/bin/env bash
# Compila y publica `dist/` en la rama gh-pages, que es la que sirve
# GitHub Pages. No toca la rama main ni el historial del proyecto.
set -euo pipefail

cd "$(dirname "$0")/.."

npm run build

remote=$(git remote get-url origin)
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

cp -R dist/. "$tmp/"
touch "$tmp/.nojekyll"

git -C "$tmp" init -q -b gh-pages
git -C "$tmp" add -A
git -C "$tmp" commit -q -m "deploy $(date +%Y-%m-%d-%H%M)"
git -C "$tmp" push -q -f "$remote" gh-pages

echo "publicado en https://caroso1222.github.io/pablo-app/"
