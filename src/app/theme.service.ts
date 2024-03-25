import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly THEME_KEY = 'theme';

  constructor() {
    this.loadTheme();
  }

  private loadTheme(): void {
    const storedTheme = localStorage.getItem(this.THEME_KEY);
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';

    if (storedTheme) {
      this.applyTheme(storedTheme);
    } else {
      this.applyTheme(preferredTheme);
    }
  }

  private applyTheme(theme: string): void {
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(theme);
  }

  isDarkMode(): boolean {
    return document.body.classList.contains('dark');
  }

  setDarkMode(isDarkMode: boolean): void {
    const theme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem(this.THEME_KEY, theme);
    this.applyTheme(theme);
  }
}
