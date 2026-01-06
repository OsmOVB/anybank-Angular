import { nanoid } from "nanoid";

export interface Transacao {
  readonly id: string;
  readonly data: Date;
  readonly tipo: TipoTransacao;
  readonly valor: number;
}

export function criarTransacao(tipo: TipoTransacao, valor: number): Transacao {
  return {
    id: nanoid(),
    data: new Date(),
    tipo,
    valor,
  };
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque',
}
