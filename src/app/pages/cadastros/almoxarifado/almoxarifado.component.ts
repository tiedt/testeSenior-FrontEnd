import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';
import { BaseCadastroComponent } from 'src/shared/base/base-component';
import { ServicesMessages } from 'src/app/services/service-mensagem';

@Component({
  selector: 'app-almoxarifado',
  templateUrl: './almoxarifado.component.html',
  styleUrls: ['./almoxarifado.component.css']
})
export class AlmoxarifadoComponent extends BaseCadastroComponent implements OnInit {

  public loading = false;

  constructor(private serviceCompra: ComprasService,
    private servicesMessages: ServicesMessages) { 
    super();
  }

  ngOnInit() {
    this.serviceCompra.obterComprasEmEspera()
    .finally(() => this.loading = false)
    .subscribe(response => this.data = response,
      error => this.servicesMessages.handleError(error));
  }

}
