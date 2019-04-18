import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasModel } from 'src/app/models/comprasModel';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ComprasService } from 'src/app/services/compras.service';
import { ServicesMessages } from 'src/app/services/service-mensagem';
import { AutoSaveFormGroup } from 'src/shared/base/auto-save-form-group';

@Component({
  selector: 'app-consultar-compras',
  templateUrl: './consultar-compras.component.html',
  styleUrls: ['./consultar-compras.component.css']
})
export class ConsultarComprasComponent implements OnInit {
  public comprasModel: ComprasModel;
  public submited: boolean;
  display: boolean;
  public loading = false;
  @Input() public idCompra: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onClose = new EventEmitter<any>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() public onSalvar = new EventEmitter<any>();

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private serviceCompra: ComprasService,
              private servicesMessages: ServicesMessages) {
    this.criarFormulario();
  }

  ngOnInit() {
    this.criarFormulario();
  }

  criarFormulario() {
    this.form =  new AutoSaveFormGroup({
      nomeDoSolicitante: new FormControl(),
      valorDoItem: new FormControl(),
      descricaoDoItem: new FormControl()
    });
  }
  novo() {
    this.display = true;
  }
  salvar() {
    this.submited = true;
    if (this.form.valid) {
      this.comprasModel = new ComprasModel();
      this.comprasModel.idCompra = this.idCompra;
      this.comprasModel.descricaoDoItem = this.form.get('descricaoDoItem').value;
      this.comprasModel.nomeDoSolicitante = this.form.get('nomeDoSolicitante').value;
      this.comprasModel.valorDoItem = this.form.get('valorDoItem').value;
      this.comprasModel.situacaoDoItem = 1;

      if (this.idCompra) {
        this.comprasModel.idCompra = this.idCompra;
        this.serviceCompra.editarCompra(this.comprasModel)
          .subscribe(response => this.aposSalvar(response),
            error => this.servicesMessages.handleError(error));
      } else {
        this.serviceCompra.adicionarCompra(this.comprasModel)
          .subscribe(response => this.aposSalvar(response),
            error => this.servicesMessages.handleError(error));
      }
    }
  }
  aposSalvar(response: any) {
    this.servicesMessages.notificacao.exibirMensagemDeSucesso('Solicitação de Compra Realizada com Sucesso');
    this.idCompra = response.idCompra;
    this.onSalvar.emit();
  }
}
