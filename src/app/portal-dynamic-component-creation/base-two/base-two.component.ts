import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-two',
  template: `
    <p>
      Base Two Component
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
