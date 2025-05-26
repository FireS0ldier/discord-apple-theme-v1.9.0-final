# Discord Apple Theme
[![CSS Lint](https://img.shields.io/github/actions/workflow/status/your-username/discord-apple-theme/lint.yml)](https://github.com/your-username/discord-apple-theme/actions?query=workflow%3Alint.yml)
[![Smoke Test](https://img.shields.io/github/actions/workflow/status/your-username/discord-apple-theme/smoke-test.yml)](https://github.com/your-username/discord-apple-theme/actions?query=workflow%3Asmoke-test.yml)
[![Visual Regression](https://img.shields.io/github/actions/workflow/status/your-username/discord-apple-theme/visual-regression.yml)](https://github.com/your-username/discord-apple-theme/actions?query=workflow%3Avisual-regression.yml)
[![Selector Check](https://img.shields.io/github/actions/workflow/status/your-username/discord-apple-theme/selector-update.yml)](https://github.com/your-username/discord-apple-theme/actions?query=workflow%3Aselector-update.yml)

![macOS Dark Theme Screenshot](docs/screenshot.png)

## Description

Transform your BetterDiscord or Vencord client into a native macOS-style application, with both Dark and Light modes, dynamic accent colors, animated UI touches, enhanced accessibility, and performance optimizations.

## Features

- **User Configuration:** Tweak accent color, blur, radius, and animation speeds via CSS variables at top of theme.
- **Dark & Light Modes:** Toggleable via `html.light-mode` class on Discord.
- **Font Scaling:** Add `html.large-text` class for larger UI text.
- **Color-Blind Filters:** `html.deuteranopia`, `html.protanopia`, `html.tritanopia` supported.
- **Refined Light Mode:** Improved hover backgrounds and scrollbar colors.
- **Mobile Bottom Tab Bar:** Sidebar reflows to bottom tab bar on narrow views.
- **Advanced Window Controls:** Hover shadows for traffic-light buttons.
- **Fluid Animations & Accessibility:** Fade-ins, pulses, focus outlines.
- **Automated Releases & CI:** Linting, release notes, cross-version troubleshooting.

## Installation

1. **BetterDiscord**  
   - Copy `themes/AppleTheme.theme.css` into your BetterDiscord themes folder.  
   - Open Discord settings → **Themes** → Enable **AppleTheme+**.

2. **Vencord**  
   - Go to **Vencord Settings** → **Themes** → **Load From File**, select `themes/AppleTheme.theme.css`, and enable it.

## License

This project is licensed under the [MIT License](LICENSE).

## Plugin Integration

### System Accent & Mode Sync
- **Use System Accent:** automatically applies your OS accent color when enabled.
- **Follow OS Dark Mode:** auto toggles dark/light theme based on system preferences.

Install the **ThemeController** plugin to enable live toggling of theme variables and dynamic system accent detection.

1. Copy `plugins/ThemeController.plugin.js`
2. Ensure **ZeresPluginLibrary** is installed: download from https://github.com/rauenzi/BDPluginLibrary and place in your plugins folder. to your BetterDiscord plugins folder.
2. Ensure **ZeresPluginLibrary** is installed.
3. Enable **ThemeController** in Discord plugins settings.

## Presets

Customize your theme at `presets/`:
- **Solarized Dark**: `presets/solarized-dark.json`
- **Nord**: `presets/nord.json`

Load presets by copying JSON values into the CSS variables section.
