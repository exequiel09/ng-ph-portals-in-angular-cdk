import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="header-6">
      <div class="branding">
        <a href="#" class="nav-link">
          <span class="title">Demo</span>
        </a>
      </div>
      <div class="header-nav">
        <a href="#" class="active nav-link nav-text" (click)="false">Home</a>
      </div>
    </header>

    <router-outlet></router-outlet>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AppComponent {
  title = 'app';
}
