import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BaseOneComponent } from './plain-dynamic-component-creation/base-one/base-one.component';
import { BaseTwoComponent } from './portal-dynamic-component-creation/base-two/base-two.component';
import { BaseThreeComponent } from './plain-dynamic-template-creation/base-three/base-three.component';
import { BaseFourComponent } from './portal-dynamic-template-creation/base-four/base-four.component';
import { BaseFiveComponent } from './portal-directives/base-five/base-five.component';

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

  {
    path: 'portal-dynamic-template-creation',
    component: BaseFourComponent,
  },

  {
    path: 'portal-directives',
    component: BaseFiveComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
