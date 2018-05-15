import { ApplicationRef, Component, ComponentFactoryResolver, Inject, Injector, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ComponentPortal, DomPortalHost, PortalOutlet } from '@angular/cdk/portal';

import { DummyTwoComponent } from '../dummy-two/dummy-two.component';

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
export class BaseTwoComponent implements OnInit, OnDestroy {
  private _portalHost: DomPortalHost;
  private _portal: ComponentPortal<DummyTwoComponent>;

  constructor(
    private _appRef: ApplicationRef,
    private _cfr: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _doc: Document,
  ) { }

  ngOnInit() {
    // set the document.body as the portal host for the dynamic components
    this._portalHost = new DomPortalHost(
      this._doc.body,
      this._cfr,
      this._appRef,
      this._injector
    );

    // create a component portal of the provided component
    this._portal = new ComponentPortal(DummyTwoComponent);

    // attach the created component portal to the portal host
    this._portal.attach(this._portalHost);
  }

  ngOnDestroy() {
    // detach the portal from the host
    this._portal.detach();
  }

}
