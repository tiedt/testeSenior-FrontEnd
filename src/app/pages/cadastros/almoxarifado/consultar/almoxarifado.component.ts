import { Component, OnInit } from '@angular/core';
import { ComprasService } from 'src/app/services/compras.service';
import { BaseCadastroComponent } from 'src/shared/base/base-component';
import { ServicesMessages } from 'src/app/services/service-mensagem';
import { ComprasModel } from 'src/app/models/comprasModel';
import { AutoSaveFormGroup } from 'src/shared/base/auto-save-form-group';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-almoxarifado',
  templateUrl: './almoxarifado.component.html',
  styleUrls: ['./almoxarifado.component.css']
})
export class AlmoxarifadoComponent extends BaseCadastroComponent implements OnInit {

  public submitted: boolean;
  public loading = false;
  public idCompras: number;
  public comprasModel: ComprasModel;
  public display: boolean;
  public btnAprovar: boolean;
  public btnReprovar: boolean;
  public observacaoReprovacao: boolean;

  constructor(private serviceCompra: ComprasService,
    private servicesMessages: ServicesMessages) {
    super();
  }

  criarFormulario() {
    this.form = new AutoSaveFormGroup({
      nomeSolicitante: new FormControl(),
      valor: new FormControl(),
      descricao: new FormControl(),
      descricaoReprovacao: new FormControl()
    });
  }

  ngOnInit() {
    this.serviceCompra.obterComprasEmEspera()
      .finally(() => this.loading = false)
      .subscribe(response => this.data = response,
        error => this.servicesMessages.handleError(error));
    this.carregarModel();
  }

  aprovar(idCompras: any) {
    this.btnAprovar = true;
    this.display = true;
    this.idCompras = idCompras;
    this.serviceCompra.obterCompraPorId(idCompras)
      .subscribe(response => {
        this.comprasModel = new ComprasModel();
        this.comprasModel.nomeSolicitante = response.nomeSolicitante;
        this.comprasModel.valor = response.valor;
        this.comprasModel.descricao = response.descricao;
        this.form.patchValue(this.comprasModel);
      });
  }

  aposSalvar(response: any) {
    // this.servicesMessages.notificacao.exibirMensagemDeSucesso('Solicitação de Compra Realizada com Sucesso');
    this.display = false;
    this.ngOnInit();
  }

  carregarModel() {
    this.observacaoReprovacao = false;
    this.btnAprovar = false;
    this.btnReprovar = false;
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
  close() {
    this.display = false;
    this.ngOnInit();
  }
  confirmarAprovacao() {
    if (this.form.valid) {
      this.comprasModel = new ComprasModel();
      this.comprasModel.idCompras = this.idCompras;
      this.comprasModel.descricao = this.form.get('descricao').value;
      this.comprasModel.nomeSolicitante = this.form.get('nomeSolicitante').value;
      this.comprasModel.valor = this.form.get('valor').value;
      this.comprasModel.situacaoSolicitacaoCompra = 2;

      if (this.idCompras) {
        this.comprasModel.idCompras = this.idCompras;
        this.serviceCompra.editarCompra(this.comprasModel)
          .finally(() => this.loading = false)
          .subscribe(response => this.aposSalvar(response),
            error => this.servicesMessages.handleError(error));
      }
    }
  }
  reprovar(idCompras: any) {
    this.display = true;
    this.btnReprovar = true;
    this.observacaoReprovacao = true;
    this.idCompras = idCompras;
    this.serviceCompra.obterCompraPorId(idCompras)
      .subscribe(response => {
        this.comprasModel = new ComprasModel();
        this.comprasModel.nomeSolicitante = response.nomeSolicitante;
        this.comprasModel.valor = response.valor;
        this.comprasModel.descricao = response.descricao;
        this.form.patchValue(this.comprasModel);
      });
  }
  confirmarReprovacao() {
    if (this.form.valid) {
      this.comprasModel = new ComprasModel();
      this.comprasModel.idCompras = this.idCompras;
      this.comprasModel.descricao = this.form.get('descricao').value;
      this.comprasModel.nomeSolicitante = this.form.get('nomeSolicitante').value;
      this.comprasModel.valor = this.form.get('valor').value;
      this.comprasModel.descricaoReprovacao = this.form.get('descricaoReprovacao').value;
      this.comprasModel.situacaoSolicitacaoCompra = 3;

      if (this.idCompras) {
        this.comprasModel.idCompras = this.idCompras;
        this.serviceCompra.editarCompra(this.comprasModel)
          .finally(() => this.loading = false)
          .subscribe(response => this.aposSalvar(response),
            error => this.servicesMessages.handleError(error));
      }
    }
  }
}