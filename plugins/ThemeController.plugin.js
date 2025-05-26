/**
 * @name ThemeController
 * @version 1.9.0
 * @description Live theme controls: dynamic system accent detection and auto light/dark mode sync.
 * @author YourName
 */
const config = {
    info: {
        name: "ThemeController",
        version: "1.2.0",
        description: "Live toggle theme variables, system accent, and auto mode detection",
        authors: [{ name: "YourName", discord_id: "" }],
    }
};

module.exports = (Plugin, Library) => {
    const { Settings } = Library;
    const { remote, nativeTheme } = window.require('electron');

    return class ThemeControllerPlugin extends Plugin {
        getSettingsPanel() {
            const panel = document.createElement("div");

            panel.appendChild(Settings.SettingGroup({
                title: "Theme Configuration",
                children: [
                    Settings.SettingField({
                        label: "Use System Accent",
                        note: "Automatically apply OS accent color",
                        type: "checkbox",
                        defaultValue: BdApi.loadData(config.info.name, "useSystemAccent") || false,
                        onChange: (checked) => {
                            BdApi.saveData(config.info.name, "useSystemAccent", checked);
                            if (checked) this.applySystemAccent();
                        }
                    }),
                    Settings.SettingField({
                        label: "Follow OS Dark Mode",
                        note: "Auto toggle light/dark based on system setting",
                        type: "checkbox",
                        defaultValue: BdApi.loadData(config.info.name, "followOSMode") || false,
                        onChange: (checked) => {
                            BdApi.saveData(config.info.name, "followOSMode", checked);
                            if (checked) this.syncOSMode();
                        }
                    })
                ]
            }));

            return panel;
        }

        applySystemAccent() {
            try {
                const accentColor = remote.systemPreferences.getAccentColor();
                const hex = `#${accentColor}`;
                document.documentElement.style.setProperty("--mac-accent", hex);
                BdApi.saveData(config.info.name, "macAccent", hex);
            } catch (e) {
                console.warn("[ThemeController] System accent detection failed", e);
            }
        }

        syncOSMode() {
            try {
                const isDark = nativeTheme.shouldUseDarkColors;
                document.documentElement.classList.toggle("light-mode", !isDark);
                BdApi.saveData(config.info.name, "lightMode", !isDark);
            } catch (e) {
                console.warn("[ThemeController] OS mode sync failed", e);
            }
        }

        onStart() {
            // apply saved settings
            const useAccent = BdApi.loadData(config.info.name, "useSystemAccent");
            if (useAccent) this.applySystemAccent();

            const followMode = BdApi.loadData(config.info.name, "followOSMode");
            if (followMode) {
                this.syncOSMode();
                // listen for changes
                nativeTheme.on('updated', () => this.syncOSMode());
            }

            // existing manual settings
            const macAccent = BdApi.loadData(config.info.name, "macAccent");
            if (macAccent) document.documentElement.style.setProperty("--mac-accent", macAccent);

            const macBlur = BdApi.loadData(config.info.name, "macBlur");
            if (macBlur) document.documentElement.style.setProperty("--mac-blur", macBlur + "px");

            const macRadius = BdApi.loadData(config.info.name, "macRadius");
            if (macRadius) document.documentElement.style.setProperty("--mac-radius", macRadius + "px");

            const light = BdApi.loadData(config.info.name, "lightMode");
            document.documentElement.classList.toggle("light-mode", light);

            const preset = BdApi.loadData(config.info.name, "preset");
            if (preset && this.presets[preset]) {
                Object.entries(this.presets[preset]).forEach(([k, v]) => {
                    document.documentElement.style.setProperty(k, v);
                });
            }
        }

        onStop() {
            // cleanup listeners
            if (nativeTheme.removeAllListeners) nativeTheme.removeAllListeners('updated');
        }

        get presets() {
            return {
                "solarized-dark": { "--mac-accent": "#268BD2", "--mac-blur": "15px", "--mac-radius": "6px" },
                "nord": { "--mac-accent": "#88C0D0", "--mac-blur": "18px", "--mac-radius": "8px" }
            };
        }
    };
};