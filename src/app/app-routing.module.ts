import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComprasComponent } from './pages/cadastros/compras/consultar/consultar-compras.component';
import { AlmoxarifadoComponent } from './pages/cadastros/almoxarifado/almoxarifado.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'compras/consultar',
        component: ConsultarComprasComponent
      },
      {
        path: 'compras/almoxarifado',
        component: AlmoxarifadoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
