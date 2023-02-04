import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotonComponent } from './boton/boton.component';
import { Frutas1Component } from './frutas1/frutas1.component';
import { Frutas2Component } from './frutas2/frutas2.component';
import { Verduras1Component } from './verduras1/verduras1.component';
import { Verduras2Component } from './verduras2/verduras2.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonComponent,
    Frutas1Component,
    Frutas2Component,
    Verduras1Component,
    Verduras2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
