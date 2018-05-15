import {
  ApplicationRef,
  Component,
  ComponentRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Inject,
  Injector,
  OnDestroy,
  OnInit
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { DummyOneComponent } from '../dummy-one/dummy-one.component';

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
export class BaseOneComponent implements OnInit, OnDestroy {
  componentRef: ComponentRef<DummyOneComponent>;

  constructor(
    private _appRef: ApplicationRef,
    private _cfr: ComponentFactoryResolver,
    private _injector: Injector,
    @Inject(DOCUMENT) private _doc: Document,
  ) { }

  ngOnInit() {
    // resolve the component factory for the given component
    const componentFactory = this._cfr.resolveComponentFactory(DummyOneComponent);

    // create an instance of the component given the injector
    this.componentRef = componentFactory.create(this._injector);

    // get the DOM element from the component
    const componentDomEl = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    // append to the body
    this._doc.body.appendChild(componentDomEl);
  }

  ngOnDestroy() {
    // remove from the dom and destroy its reference
    this._appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }

}
