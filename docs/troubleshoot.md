# Troubleshooting Guide

## Common Issues

### Theme Not Showing Up
- Ensure you've placed `AppleTheme.theme.css` in the correct folder:
  - BetterDiscord: `%appdata%/BetterDiscord/themes`
  - Vencord: Load via **Themes → Load From File**
- Reload Discord or toggle theme off/on.

### CSS Not Applying
- Check for conflicting plugins or other themes.
- Verify you are using the correct filename extension `.css`.
- Open DevTools (Ctrl+Shift+I) and confirm CSS selectors match current Discord version.

### Outdated Selectors
Discord class names can change. If UI elements don’t style correctly:
1. Open DevTools.
2. Inspect the element.
3. Search for a new class name in `theme.css` and update the selector accordingly.
4. Submit an issue with the new selector.

### Performance Issues
- Reduce blur by setting `--mac-blur: 10px` or `--mac-radius: 4px`.
- Disable heavy animations by removing keyframes or transitions.

For further help, open an [issue](https://github.com/<your-username>/discord-apple-theme/issues/new/choose).
