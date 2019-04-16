import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComprasComponent } from './consultar/consultar-compras.component';
import { ComprasPainelComponent } from './compras-painel/compras-painel.component';


const routes: Routes = [
  {
    path: '',
    component: ConsultarComprasComponent,
  },
  {
    path: 'novo',
    component: ComprasPainelComponent,
  },
  {
    path: ':idCompra',
    component: ComprasPainelComponent,

  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }
