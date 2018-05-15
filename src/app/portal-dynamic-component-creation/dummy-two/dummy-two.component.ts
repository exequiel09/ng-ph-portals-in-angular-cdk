import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy-two',
  template: `
    <p>
      Dummy Two Component
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class DummyTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
