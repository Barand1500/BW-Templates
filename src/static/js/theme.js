/**
 * Theme Switcher Script
 * Handles dark/light mode toggle with localStorage persistence
 */

(function() {
    'use strict';

    const THEME_KEY = 'site-theme';
    const THEME_LIGHT = 'light';
    const THEME_DARK = 'dark';

    class ThemeManager {
        constructor() {
            this.currentTheme = this.getSavedTheme() || this.getPreferredTheme();
            this.init();
        }

        init() {
            this.applyTheme(this.currentTheme);
            this.createToggleButton();
            this.watchSystemPreference();
        }

        getSavedTheme() {
            try {
                return localStorage.getItem(THEME_KEY);
            } catch (e) {
                console.warn('localStorage not available:', e);
                return null;
            }
        }

        getPreferredTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return THEME_DARK;
            }
            return THEME_LIGHT;
        }

        applyTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            this.currentTheme = theme;
            
            try {
                localStorage.setItem(THEME_KEY, theme);
            } catch (e) {
                console.warn('Could not save theme preference:', e);
            }

            // Dispatch custom event
            window.dispatchEvent(new CustomEvent('themechange', { 
                detail: { theme } 
            }));
        }

        toggleTheme() {
            const newTheme = this.currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT;
            this.applyTheme(newTheme);
            this.updateToggleButton();
        }

        createToggleButton() {
            // Check if button already exists
            if (document.querySelector('.theme-toggle')) {
                return;
            }

            const button = document.createElement('button');
            button.className = 'theme-toggle';
            button.setAttribute('aria-label', 'Toggle theme');
            button.innerHTML = this.getThemeIcon();
            
            button.addEventListener('click', () => this.toggleTheme());
            
            document.body.appendChild(button);
            this.toggleButton = button;
        }

        updateToggleButton() {
            if (this.toggleButton) {
                this.toggleButton.innerHTML = this.getThemeIcon();
            }
        }

        getThemeIcon() {
            return this.currentTheme === THEME_LIGHT ? '🌙' : '☀️';
        }

        watchSystemPreference() {
            if (window.matchMedia) {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                
                // Modern browsers
                if (mediaQuery.addEventListener) {
                    mediaQuery.addEventListener('change', (e) => {
                        // Only auto-switch if user hasn't set a preference
                        if (!localStorage.getItem(THEME_KEY)) {
                            this.applyTheme(e.matches ? THEME_DARK : THEME_LIGHT);
                            this.updateToggleButton();
                        }
                    });
                }
            }
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.themeManager = new ThemeManager();
        });
    } else {
        window.themeManager = new ThemeManager();
    }

    // Export for module usage
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = ThemeManager;
    }
})();
