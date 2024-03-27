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
  dark: boolean;
  constructor(private themeService: ThemeService) {
    this.dark = this.themeService.isDarkMode();
  }

  toggleTheme(): void {
    this.dark = !this.dark;
    this.themeService.setDarkMode(this.dark);
  }
}
