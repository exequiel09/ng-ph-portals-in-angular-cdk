import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTwoComponent } from './base-two/base-two.component';
import { DummyTwoComponent } from './dummy-two/dummy-two.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseTwoComponent,
    DummyTwoComponent,
  ],
  entryComponents: [
    DummyTwoComponent,
  ]
})
export class PortalDynamicComponentCreationModule { }
