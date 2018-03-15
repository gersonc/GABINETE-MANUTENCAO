export interface Combox {
  campo_id: number;
  campo_valor: string;
  campo_select: string;
}

export interface ComboxIdtxt {
  campo_id: string;
  campo_valor: string;
  campo_select: string;
}

export interface Combox2Valores {
  campo_id: number;
  campo_valor: string;
  campo_valor2: string;
  campo_select: string;
}

export interface ComboxDF {
  funcao: string;
  tabela: string;
  campo_id: any;
  campo_nome: string;
  val_campo_id: any;
  params: any;
}

export interface ComboxSoNomeAgrupado {
  campo_valor: string;
  campo_select: string;
}
