export interface CadsiteInterface {
  gab_id: number;
  gab_nome: string;
  gab_email: string;
  gab_telefone: string;
  gab_cidade: string;
  gab_estado: string;
  gab_nome_parlamentar: string;
  gab_cargo: string;
  gab_observacoes: string;
  gab_datetime: string;
  gab_chave: string;
  gab_ativado: number;
  gab_norte_id: number;
}

export interface NorteInterface {
  parlamentar_id: number;
  parlamentar_nome: string;
  parlamentar_login: string;
  parlamentar_senha: string;
  parlamentar_db: string;
  parlamentar_ativo: number;
  dt_cadastro: string;
  dt_ativacao: string;
  dt_desativacao: string;
  dt_apagado: string;
  apagado: number;
  assinante: number;
}

export interface UsuarioInterface {
  usuario_id: number;
  usuario_local_id: number;
  usuario_nome: string;
  usuario_login: string;
  usuario_senha: string;
  usuario_email: string;
  usuario_frase_secreta: string;
  usuario_resposta_secreta: string;
  usuario_cargo: string;
  usuario_responsavel_sn: number;
  usuario_principal_sn: number;
  usuario_solicitacao_aceitas: number;
  usuario_solicitacao_recusadas: number;
  usuario_solicitacao_abertas: number;
  usuario_solicitacao_resolvidas: number;
  usuario_acesso: string;
  usuario_db: string;
  usuario_celular: string;
  primeiro_acesso: number;
  norte_parlamentar_id: number;
}

export interface Totalnterface {
  num: number;
}

export interface CadsitePaginacaoInterface {
  cad: CadsiteInterface[];
  total: Totalnterface[];
}

export interface NortePaginacaoInterface {
  cad: NorteInterface[];
  total: Totalnterface[];
}

export interface UsuarioPaginacaoInterface {
  cad: UsuarioInterface[];
  total: Totalnterface[];
}
