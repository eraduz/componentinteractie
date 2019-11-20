import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoonComponent } from './zoon/zoon.component';
import { OpaComponent } from './opa/opa.component';
import { VaderComponent } from './vader/vader.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoonComponent,
    OpaComponent,
    VaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
