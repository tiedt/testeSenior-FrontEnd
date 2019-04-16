import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { HttpClientModule  } from '@angular/common/http'; 
import { ServicesMessages, Notificacao } from './services/service-mensagem';
import { ComprasConsultarComponent } from './pages/cadastros/compras/compras-consultar/compras-consultar.component';
import { ComprasCadastrarComponent } from './pages/cadastros/compras/compras-cadastrar/compras-cadastrar.component';
import { ComprasPainelComponent } from './pages/cadastros/compras/compras-painel/compras-painel.component';

@NgModule({
  declarations: [
    AppComponent,
    ComprasConsultarComponent,
    ComprasCadastrarComponent,
    ComprasPainelComponent
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
