import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HttpClientModule } from '@angular/common/http'; 
import { CriarComprasComponent } from './compras/criar/criar-compra.component';
import { ConsultarComprasComponent } from './compras/consultar/consultar-compras.component';
import { ComprasService } from './services/compras.service';
import { ServicesMessages, Notificacao } from './services/service-mensagem';

@NgModule({
  declarations: [
    AppComponent,
    CriarComprasComponent,
    ConsultarComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    HttpClientModule 
  ],
  providers: [ ServicesMessages ],
  bootstrap: [AppComponent]
})
export class AppModule { }
