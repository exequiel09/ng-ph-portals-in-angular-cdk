import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomPortalOutlet, PortalOutlet, TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-base-four',
  template: `
    <p>
      Base Four Component
    </p>

    <ng-template #dummyFour>
      <p>I am a template contained in an ng-template.</p>
      <p>Another paragraph</p>
    </ng-template>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseFourComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dummyFour') dummyFour: TemplateRef<any>;

  private _portalOutlet: PortalOutlet;
  private _portal: TemplatePortal<any>;

  constructor(
    private _appRef: ApplicationRef,
    private _cfr: ComponentFactoryResolver,
    private _injector: Injector,
    private _vcr: ViewContainerRef,
    @Inject(DOCUMENT) private _doc: Document,
  ) { }

  ngAfterViewInit() {
    // set the document.body as the portal host for the dynamic template
    this._portalOutlet = new DomPortalOutlet(
      this._doc.body,
      this._cfr,
      this._appRef,
      this._injector
    );

    // create a template portal of the provided TemplateRef
    this._portal = new TemplatePortal(this.dummyFour, this._vcr);

    // attach the created template portal to the portal host
    this._portal.attach(this._portalOutlet);
  }

  ngOnDestroy() {
    // detach the portal from the host
    this._portal.detach();
  }

}
