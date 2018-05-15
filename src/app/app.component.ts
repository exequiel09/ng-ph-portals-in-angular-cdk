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
          <a class="nav-link" [routerLink]="['/plain-dynamic-component-creation']" [routerLinkActive]="'active'">
            Demo 1 (Plain - Component)
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/portal-dynamic-component-creation']" [routerLinkActive]="'active'">
            Demo 2 (Portal - Component)
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/plain-dynamic-template-creation']" [routerLinkActive]="'active'">
            Demo 3 (Plain - Template)
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/portal-dynamic-template-creation']" [routerLinkActive]="'active'">
            Demo 4 (Portal - Template)
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/portal-directives']" [routerLinkActive]="'active'">
            Demo 5 (Portal Directives)
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
