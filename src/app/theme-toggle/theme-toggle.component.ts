import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  constructor(private themeService: ThemeService) {}
  dark = this.themeService.isDarkMode();
  toggleTheme(): void {
    const isDarkMode = !this.themeService.isDarkMode();
    this.themeService.setDarkMode(isDarkMode);
  }
}
