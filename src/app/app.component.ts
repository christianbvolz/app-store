import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderMenuComponent } from './components/header-menu/header-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderMenuComponent],
  template: `
    <app-header-menu/>
    <router-outlet/>
  `,

})
export class AppComponent {
  title = 'front-app-store';
}
