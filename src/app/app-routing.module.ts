import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComprasComponent } from './pages/cadastros/compras/consultar/consultar-compras.component';
import { AlmoxarifadoComponent } from './pages/cadastros/almoxarifado/consultar/almoxarifado.component';
import { AdminstrativoComponent } from './pages/cadastros/adminstrativo/criar/adminstrativo.component';

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
      },
      {
        path: 'compras/adminstrativo',
        component: AdminstrativoComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
