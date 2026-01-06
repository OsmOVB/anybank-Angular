import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boas-vindas',
  standalone: true,
  imports: [DatePipe, TitleCasePipe],
  templateUrl: './boas-vindas.html',
  styleUrls: ['./boas-vindas.css'],
})
export class BoasVindas {
  dataAtual = new Date();
}
