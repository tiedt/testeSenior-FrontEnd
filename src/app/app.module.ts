import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClientModule  } from '@angular/common/http';
import { ServicesMessages, Notificacao } from './services/service-mensagem';
import { ConsultarComprasComponent } from './pages/cadastros/compras/consultar/consultar-compras.component';
import { ComprasPainelComponent } from './pages/cadastros/compras/compras-painel/compras-painel.component';
// tslint:disable-next-line:max-line-length
import { GrowlModule, ConfirmDialogModule, ConfirmationService, DialogModule, DropdownModule, AutoCompleteModule, CalendarModule} from 'primeng/primeng';
@NgModule({
  declarations: [
    AppComponent,
    ConsultarComprasComponent,
    ComprasPainelComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    HttpClientModule,
    GrowlModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    AutoCompleteModule,
    CalendarModule
  ],
  providers: [ ServicesMessages, ConfirmationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
