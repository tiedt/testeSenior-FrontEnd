import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ComprasModel } from 'src/app/models/comprasModel';
import { ComprasService } from 'src/app/services/compras.service';
import { ServicesMessages } from 'src/app/services/service-mensagem';


@Component({
  selector: 'app-criar-compras',
  templateUrl: './criar-compras.component.html',
  styleUrls: ['./criar-compras.component.css']
})
export class CriarComprasComponent implements OnInit {
  public comprasModel: ComprasModel;
  public submitted: boolean;
  public loading = false;
  @Input() public idCompra: number;
  @Output() public onClose = new EventEmitter<any>();
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
    this.form = this.formBuilder.group({
      nomeDoSolicitante: new FormControl (['', Validators.required]),
      valorDoItem: new FormControl (['', Validators.required]),
      descricaoDoItem: new FormControl (['', Validators.required])
    });
  }
  salvar() {
    if (this.form.valid) {
      this.comprasModel = new ComprasModel();
      this.comprasModel.idCompra = this.idCompra;
      this.comprasModel.descricaoDoItem = this.form.get('descricaoDoItem').value;
      this.comprasModel.nomeDoSolicitante = this.form.get('nomeDoSolicitante').value;
      this.comprasModel.valorDoItem = this.form.get('valorDoItem').value;

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
