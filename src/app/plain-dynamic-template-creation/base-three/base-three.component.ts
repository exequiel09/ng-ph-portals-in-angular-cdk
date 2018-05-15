import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-three',
  template: `
    <p>
      Base Three Component
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
