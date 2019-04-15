import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComprasComponent } from './compras/consultar/consultar-compras.component';
import { CriarComprasComponent } from './compras/criar/criar-compra.component';

const routes: Routes = [
  {
    path: 'compras/consultar',
    component: ConsultarComprasComponent
  },
  {
    path: 'compras/criar',
    component: CriarComprasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
