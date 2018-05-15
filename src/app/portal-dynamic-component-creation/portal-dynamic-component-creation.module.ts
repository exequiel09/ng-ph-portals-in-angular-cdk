import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseTwoComponent } from './base-two/base-two.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    BaseTwoComponent,
  ]
})
export class PortalDynamicComponentCreationModule { }
