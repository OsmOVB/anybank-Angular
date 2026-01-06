import { CurrencyPipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './conta.html',
  styleUrls: ['./conta.css'],
})
export class Conta {
 saldo = input.required<number>();
}
