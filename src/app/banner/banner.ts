import { Component, input } from '@angular/core';
import { BoasVindas } from './boas-vindas/boas-vindas';
import { Conta } from './conta/conta';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [BoasVindas, Conta],
  templateUrl: './banner.html',
  styleUrls: ['./banner.css'],
})
export class Banner {
  saldo = input.required<number>();
}
