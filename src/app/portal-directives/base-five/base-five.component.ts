import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CdkPortal, CdkPortalOutlet } from '@angular/cdk/portal';

@Component({
  selector: 'app-base-five',
  template: `
    <p>
      Base Five Component
    </p>

    <div>
      <ng-template [cdkPortalOutlet]="portal"></ng-template>
    </div>

    <!-- same as "<ng-template cdkPortal></ng-template>" -->
    <p *cdkPortal>
      The content of this template is captured by the portal.
    </p>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseFiveComponent implements AfterViewInit {
  @ViewChild(CdkPortal) portal: CdkPortal;
  @ViewChild(CdkPortalOutlet) portalOutlet: CdkPortalOutlet;

  constructor() { }

  ngAfterViewInit() {
    // we now have references of the the portalOutlet and portal created by the cdk directives
    console.log(this.portalOutlet);
    console.log(this.portal);
  }

}
