import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';
import { ServicesMessages } from 'src/app/services/service-mensagem';
import { BaseCadastroComponent } from 'src/shared/base/base-component';
import { ComprasModel } from 'src/app/models/comprasModel';
import { AutoSaveFormGroup } from 'src/shared/base/auto-save-form-group';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminstrativo',
  templateUrl: './adminstrativo.component.html',
  styleUrls: ['./adminstrativo.component.css']
})
export class AdminstrativoComponent extends BaseCadastroComponent implements OnInit {

  public comprasModel: ComprasModel;
  public idCompras: number;
  public loading = false;
  constructor(private serviceCompra: ComprasService,
    private servicesMessages: ServicesMessages) {
    super();
  }

  ngOnInit() {
    this.serviceCompra.obterCompras()
      .finally(() => this.loading = false)
      .subscribe(response => this.data = response,
        error => this.servicesMessages.handleError(error));
    this.carregarModel();
  }
  carregarModel() {
    if (this.idCompras) {
      this.serviceCompra.obterCompraPorId(this.idCompras)
        .subscribe(response => {
          this.comprasModel = new ComprasModel();
          this.comprasModel.nomeSolicitante = response.nomeSolicitante;
          this.comprasModel.valor = response.valor;
          this.comprasModel.descricao = response.descricao;
          this.form.patchValue(this.comprasModel);
        });
    } else {
      this.criarFormulario();
    }
  }
  criarFormulario() {
    this.form = new AutoSaveFormGroup({
      nomeSolicitante: new FormControl(),
      valor: new FormControl(),
      descricao: new FormControl(),
      descricaoReprovacao: new FormControl()
    });
  }

  buscaAprovados() {
    this.serviceCompra.obterComprasAprovada()
      .finally(() => this.loading = false)
      .subscribe(response => this.data = response,
        error => this.servicesMessages.handleError(error));
  }
  buscaReprovados() {
    this.serviceCompra.obterComprasReprovada()
      .finally(() => this.loading = false)
      .subscribe(response => this.data = response,
        error => this.servicesMessages.handleError(error));
  }
  buscaPendentes() {
    this.serviceCompra.obterComprasEmEspera()
      .finally(() => this.loading = false)
      .subscribe(response => this.data = response,
        error => this.servicesMessages.handleError(error));
  }
  buscarConsulta() {
    const elementoBarra = this.form.get('txt_consulta').value;
    this.serviceCompra.consulta(elementoBarra)
      .finally(() => this.loading = false)
      .subscribe(response => this.data = response,
        error => this.servicesMessages.handleError(error));
  }
}


