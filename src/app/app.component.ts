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
        <a href="#" class="active nav-link nav-text" [routerLink]="['/']">Home</a>
      </div>
    </header>
    <nav class="subnav">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/']" [routerLinkActive]="'active'">
            Demo 1 (Plain - Component)
          </a>
        </li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class AppComponent {
  title = 'app';
}
