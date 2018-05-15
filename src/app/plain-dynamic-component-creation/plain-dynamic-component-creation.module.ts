import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DummyOneComponent } from './dummy-one/dummy-one.component';
import { BaseOneComponent } from './base-one/base-one.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DummyOneComponent,
    BaseOneComponent,
  ],
  entryComponents: [
    DummyOneComponent,
  ]
})
export class PlainDynamicComponentCreationModule { }
