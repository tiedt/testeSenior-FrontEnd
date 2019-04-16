import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http'; 
import { CriarComprasComponent } from './criar/criar-compra.component';
import { ConsultarComprasComponent } from './consultar/consultar-compras.component';
import { ComprasService } from '../../../services/compras.service';
import { ComprasRoutingModule } from './compras-routing.module';
import { ComprasPainelComponent } from './compras-painel/compras-painel.component';


@NgModule({
  declarations: [
    CriarComprasComponent,
    ConsultarComprasComponent,
    ComprasPainelComponent
  ],
  imports: [
    ComprasRoutingModule,
    HttpClientModule

  ],
  providers: [ ComprasService ],
  exports: [
    ComprasPainelComponent,
    CriarComprasComponent,
    ConsultarComprasComponent
  ]

})
export class ComprasModule { }
