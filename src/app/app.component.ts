import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    MatButtonModule,
    MatMenuModule,
    ThemeToggleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Kanban-Web-App';

  private _themeService: ThemeService = new ThemeService();
  get themeService(): ThemeService {
    return this._themeService;
  }

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  constructor(public dialog: MatDialog) {}

  openSetting() {
    this.dialog.open(Setting, {
      position: { top: '80px' },
    });
  }
}

@Component({
  selector: 'setting',
  templateUrl: 'modals/setting.html',
  styles: '',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
})
export class Setting {}
