import { NgModule, LOCALE_ID } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { HttpClientModule  } from '@angular/common/http';
import { ServicesMessages} from './services/service-mensagem';
import { ConsultarComprasComponent } from './pages/cadastros/compras/consultar/consultar-compras.component';
// tslint:disable-next-line:max-line-length
import { GrowlModule, ConfirmDialogModule, ConfirmationService, DialogModule, DropdownModule, AutoCompleteModule, CalendarModule} from 'primeng/primeng';
import { AlmoxarifadoComponent } from './pages/cadastros/almoxarifado/consultar/almoxarifado.component';
import { AdminstrativoComponent } from './pages/cadastros/adminstrativo/criar/adminstrativo.component';
import { NotificationsComponent } from './services/notifications-component';
import { NotificationsService } from './services/notificacao-mensagem';
import { LoadingService } from './services/loading-service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationsComponent,
    ConsultarComprasComponent,
    AlmoxarifadoComponent,
    AdminstrativoComponent
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
  providers: [
     ServicesMessages,
     ConfirmationService ,
     NotificationsService,
     LoadingService,
     {provide: LOCALE_ID, useValue: 'pt'}
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }
