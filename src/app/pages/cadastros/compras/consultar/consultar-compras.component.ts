import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasModel } from 'src/app/models/comprasModel';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ComprasService } from 'src/app/services/compras.service';
import { ServicesMessages } from 'src/app/services/service-mensagem';
import { AutoSaveFormGroup } from 'src/shared/base/auto-save-form-group';
import { BaseCadastroComponent } from 'src/shared/base/base-component';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-consultar-compras',
  templateUrl: './consultar-compras.component.html',
  styleUrls: ['./consultar-compras.component.css']
})
export class ConsultarComprasComponent extends BaseCadastroComponent implements OnInit {
  public comprasModel: ComprasModel;
  public submited: boolean;
  public display: boolean;
  public loading = false;
  public idCompras: number;
  public onClose = new EventEmitter<any>();
  public onSalvar = new EventEmitter<any>();

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

  criarFormulario() {
    this.form = new AutoSaveFormGroup({
      nomeSolicitante: new FormControl(),
      valor: new FormControl(),
      descricao: new FormControl()
    });
  }
  novo() {
    this.display = true;
    this.idCompras = undefined;
    this.criarFormulario();
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

  editar(idCompras: any) {
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

  remover(idCompras: any) {
    this.serviceCompra.excluirCompra(idCompras)
      .finally(() => this.ngOnInit())
      .subscribe(item => { });
    this.servicesMessages.notification.exibirMensagemDeSucesso('Solicitação de Compra Removida com Sucesso');
  }

  salvar() {
    this.submited = true;
    const descricao = this.form.get('descricao').value;
    if (descricao === null) {
      this.servicesMessages.notification.exibirMensagemDeErro('A Descrição não foi informada');
      return;
    }
    const nomeSolicitante = this.form.get('nomeSolicitante').value;
    if (nomeSolicitante === null) {
      this.servicesMessages.notification.exibirMensagemDeErro('O Nome do Solicitante não foi informado');
      return;
    }
    const valor = this.form.get('valor').value;
    if (valor === null) {
      this.servicesMessages.notification.exibirMensagemDeErro('O Valor não foi informado');
      return;
    }
    if (this.form.valid) {
      this.comprasModel = new ComprasModel();
      this.comprasModel.idCompras = this.idCompras;
      this.comprasModel.descricao = this.form.get('descricao').value;
      this.comprasModel.nomeSolicitante = this.form.get('nomeSolicitante').value;
      this.comprasModel.valor = this.form.get('valor').value;
      this.comprasModel.situacaoSolicitacaoCompra = 1;

      if (this.idCompras) {
        this.comprasModel.idCompras = this.idCompras;
        this.serviceCompra.editarCompra(this.comprasModel)
          .finally(() => this.loading = false)
          .subscribe(response => this.aposSalvar(response),
            error => this.servicesMessages.handleError(error));
      } else {
        this.serviceCompra.adicionarCompra(this.comprasModel)
          .finally(() => this.loading = false)
          .subscribe(response => this.aposSalvar(response),
            error => this.servicesMessages.handleError(error));
      }
    }
  }
  aposSalvar(response: any) {
    this.servicesMessages.notification.exibirMensagemDeSucesso('Solicitação de Compra Realizada com Sucesso');
    this.display = false;
    this.ngOnInit();
  }
  close() {
    this.display = false;
  }
}
