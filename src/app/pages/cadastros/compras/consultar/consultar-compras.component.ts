import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-consultar-compras',
  templateUrl: './consultar-compras.component.html',
  styleUrls: ['./consultar-compras.component.css']
})
export class ConsultarComprasComponent implements OnInit {
  //public comprasModel: ComprasModel;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  novo() {
    this.router.navigate(['/compras/criar', '']);
  }

}
