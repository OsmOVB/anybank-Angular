import { Component, input } from '@angular/core';
import { TransacaoComponent } from './transacao/transacao';
import { Transacao } from '../modelos/transacao';

@Component({
  selector: 'app-extrato',
  standalone: true,
  imports: [TransacaoComponent],
  templateUrl: './extrato.html',
  styleUrls: ['./extrato.css'],
})
export class Extrato {
  transacoes= input.required<Transacao[]>();
}
