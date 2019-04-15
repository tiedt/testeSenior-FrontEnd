import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ServicesMessages {

    constructor() { }
     public notificacao: Notificacao
    handleError(error: any, msg?: string, sticky: boolean = false) {

        this.notificacao.exibirMensagemDeErro(error.error.error.message.replace(/(\n)+/g, '<br />'), sticky);

    }
    
}
@Injectable()
export class Notificacao {
    notificationChange: Subject<Object> = new Subject<Object>();

    exibirMensagemDeSucesso(msg: string, sticky: boolean = false, life: number = 3000) {
        this.notificationChange.next({ severity: 'success', summary: 'Sucesso', detail: msg, sticky: sticky, life: life });
    }

    exibirMensagemDeAlerta(msg: string, sticky: boolean = false, life: number = 3000) {
        this.notificationChange.next({ severity: 'warn', summary: 'Atenção', detail: msg, sticky: sticky, life: life });
    }

    exibirMensagemDeInformacao(msg: string, sticky: boolean = false, life: number = 3000) {
        this.notificationChange.next({ severity: 'info', summary: 'Informação', detail: msg, sticky: sticky, life: life });
    }
    exibirMensagemDeErro(msg: string, sticky: boolean = false, life: number = 3000) {
        this.notificationChange.next({ severity: 'error', summary: 'Erro', detail: msg, sticky: sticky, life: life });
    }
}