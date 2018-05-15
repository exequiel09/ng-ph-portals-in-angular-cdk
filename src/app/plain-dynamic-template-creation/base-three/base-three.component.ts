import {
  AfterViewInit,
  Component,
  EmbeddedViewRef,
  Inject,
  OnDestroy,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-base-three',
  template: `
    <p>
      Base Three Component
    </p>

    <ng-template #dummyThree>
      <p>I am a template contained in an ng-template.</p>
      <p>Another paragraph</p>
    </ng-template>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class BaseThreeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('dummyThree') dummyThree: TemplateRef<any>;

  private _embeddedView: EmbeddedViewRef<any>;

  constructor(
    private _vcr: ViewContainerRef,
    @Inject(DOCUMENT) private _doc: Document,
  ) { }

  ngAfterViewInit() {
    // create an embedded view for the TemplateRef
    this._embeddedView = this._vcr.createEmbeddedView(this.dummyThree);

    // move the view to the document's body element by appending all existing root nodes of the template.
    this._embeddedView.rootNodes.forEach(rootNode => this._doc.body.appendChild(rootNode));
  }

  ngOnDestroy() {
    // remove the dynamically injected template from the DOM
    const index = this._vcr.indexOf(this._embeddedView);

    if (index > -1) {
      this._vcr.remove(index);
    }
  }

}
