import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseOneComponent } from './plain-dynamic-component-creation/base-one/base-one.component';
import { BaseTwoComponent } from './portal-dynamic-component-creation/base-two/base-two.component';

const routes: Routes = [
  {
    path: '',
    component: BaseOneComponent,
  },

  {
    path: 'plain-dynamic-component-creation',
    component: BaseOneComponent,
  },

  {
    path: 'portal-dynamic-component-creation',
    component: BaseTwoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
