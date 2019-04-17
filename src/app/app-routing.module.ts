import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComprasComponent } from './pages/cadastros/compras/consultar/consultar-compras.component';
import { CriarComprasComponent } from './pages/cadastros/compras/criar/criar-compras.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'compras',
        loadChildren: './pages/cadastros/compras/compras-module#ComprasModule'
      },
      {
        path: 'compras/consultar',
        component: ConsultarComprasComponent
      },
      {
        path: 'compras/criar',
        component: CriarComprasComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
