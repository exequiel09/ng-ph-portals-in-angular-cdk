import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';

import { PortalDirectivesModule } from './portal-directives/portal-directives.module';
import { PortalDynamicTemplateCreationModule } from './portal-dynamic-template-creation/portal-dynamic-template-creation.module';
import { PlainDynamicTemplateCreationModule } from './plain-dynamic-template-creation/plain-dynamic-template-creation.module';
import { PortalDynamicComponentCreationModule } from './portal-dynamic-component-creation/portal-dynamic-component-creation.module';
import { PlainDynamicComponentCreationModule } from './plain-dynamic-component-creation/plain-dynamic-component-creation.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    PortalModule,

    AppRoutingModule,
    PlainDynamicComponentCreationModule,
    PortalDynamicComponentCreationModule,
    PlainDynamicTemplateCreationModule,
    PortalDynamicTemplateCreationModule,
    PortalDirectivesModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
