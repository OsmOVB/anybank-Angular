import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../../modelos/transacao';

@Component({
  selector: 'app-transacao',
  standalone: true,
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transacao.html',
  styleUrls: ['./transacao.css'],
})
export class TransacaoComponent {
  transacao = input.required<Transacao>();

  valor = computed(() => {
    if (this.transacao().tipo === TipoTransacao.SAQUE) {
      return -this.transacao().valor;
    }

    return this.transacao().valor;
  });
}
