import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-one',
  template: `
    <p>
      Dummy One Component
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class DummyOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
