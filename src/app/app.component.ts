import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Kanban-Web-App';
  theme = localStorage.getItem('theme') || 'dark';
  logo = 'assets/images/logo-light.svg';

  onClick() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.logo =
      this.logo === 'assets/images/logo-light.svg'
        ? 'assets/images/logo-dark.svg'
        : 'assets/images/logo-light.svg';
    localStorage.setItem('theme', this.theme);
  }
}
