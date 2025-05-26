# Pre-Release Validation Steps

Follow these steps to validate v1.4.0 before official release:

## 1. Smoke-Test Installation
- Unzip `discord-apple-theme-v1.4.0.zip` into a clean directory.
- Run `scripts/smoke_test.sh` to verify file structure:
  ```bash
  bash scripts/smoke_test.sh
  ```
- Ensure output lists `themes/AppleTheme.theme.css`, `plugins/ThemeController.plugin.js`, `presets/*.json`, and docs files.

## 2. Edge-Case Checks
- **Presets**: Load `solarized-dark.json` and `nord.json` manually into CSS variables at top of `themes/AppleTheme.theme.css` to confirm no syntax errors.
- **Modes & Filters**: Open `docs/index.html` in a browser, click toggles for:
  - Dark/Light mode
  - Large-text
  - Deuteranopia, Protanopia, Tritanopia filters
- **Mobile Layout**: Resize the browser viewport to <800px width and confirm bottom tab bar appears.

## 3. CI Dry-Run
- Create a dummy branch and open a pull request against `main` to trigger:
  - `.github/workflows/lint.yml`
  - `.github/workflows/visual-regression.yml`
- Verify both workflows complete successfully (no lint errors, no Percy snapshot failures).

After completing these checks, proceed to tag `v1.4.0` and release.
