import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-four',
  template: `
    <p>
      Base Four Component
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
