import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseOneComponent } from './plain-dynamic-component-creation/base-one/base-one.component';
import { BaseTwoComponent } from './portal-dynamic-component-creation/base-two/base-two.component';
import { BaseThreeComponent } from './plain-dynamic-template-creation/base-three/base-three.component';

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

  {
    path: 'plain-dynamic-template-creation',
    component: BaseThreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
