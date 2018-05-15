import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { BaseFiveComponent } from './base-five/base-five.component';

@NgModule({
  imports: [
    CommonModule,
    PortalModule,
  ],
  declarations: [
    BaseFiveComponent,
  ]
})
export class PortalDirectivesModule { }
