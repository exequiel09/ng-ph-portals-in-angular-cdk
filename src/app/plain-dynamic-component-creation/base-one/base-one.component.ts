import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-one',
  template: `
    <p>
      Base One Component
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
