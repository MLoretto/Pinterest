import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { DetalleComponent } from './detalle/detalle.component';
import { CartaComponent } from './carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    DetalleComponent,
    CartaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
