import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PortalDynamicComponentCreationModule } from './portal-dynamic-component-creation/portal-dynamic-component-creation.module';
import { PlainDynamicComponentCreationModule } from './plain-dynamic-component-creation/plain-dynamic-component-creation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,

    AppRoutingModule,
    PlainDynamicComponentCreationModule,
    PortalDynamicComponentCreationModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
