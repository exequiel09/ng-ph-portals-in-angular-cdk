import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseOneComponent } from './base-one/base-one.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseOneComponent,
  ]
})
export class PlainDynamicComponentCreationModule { }
