#!/usr/bin/env bash
echo "Listing key files for smoke test:"
FILES=(
  "themes/AppleTheme.theme.css"
  "plugins/ThemeController.plugin.js"
  "presets/solarized-dark.json"
  "presets/nord.json"
  "docs/index.html"
  "docs/troubleshoot.md"
  "docs/validation.md"
)
for f in "${FILES[@]}"; do
  if [ -f "$f" ]; then
    echo "✔ $f"
  else
    echo "✖ $f (missing)"
  fi
done
