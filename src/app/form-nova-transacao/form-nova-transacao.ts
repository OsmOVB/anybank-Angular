import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao, criarTransacao } from '../modelos/transacao';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-form-nova-transacao',
  standalone: true,
  imports: [FormsModule, KeyValuePipe],
  templateUrl: './form-nova-transacao.html',
  styleUrls: ['./form-nova-transacao.css'],
})
export class FormNovaTransacao {
  tipoTransacao= ""
  valorTransacao= ""

  transacaoCriada = output<Transacao>();

  tipoTransacaoEnum = TipoTransacao;


  aoSubmeter() {
    const transacao: Transacao = criarTransacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit(transacao);

    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
