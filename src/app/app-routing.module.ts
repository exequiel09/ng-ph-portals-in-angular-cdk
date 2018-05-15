import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseOneComponent } from './plain-dynamic-component-creation/base-one/base-one.component';

const routes: Routes = [
  {
    path: '',
    component: BaseOneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
