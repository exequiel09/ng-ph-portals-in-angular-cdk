import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseThreeComponent } from './base-three/base-three.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseThreeComponent,
  ]
})
export class PlainDynamicTemplateCreationModule { }
