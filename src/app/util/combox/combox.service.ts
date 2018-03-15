import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {Combox, Combox2Valores, ComboxIdtxt, ComboxSoNomeAgrupado} from './combox.interface';

@Injectable()
export class ComboxService {

  private comboxUrl = 'http://slimgn01/combox';
  private combox$: Observable<Combox[]>;
  private comboxIdtxt$: Observable<ComboxIdtxt[]>;
  private combox2valores$: Observable<Combox2Valores[]>;
  private comboxsonomeagrupado$: Observable<ComboxSoNomeAgrupado[]>;

  constructor(private http: HttpClient) {
  }

  public getComboxSimples(funcao, tabela, campo_id, campo_nome, params?): Observable<Combox[]> {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_id
      + '/' + campo_nome;
    if (params) {
      cb += '/' + params;
    }
    this.combox$ = this.http.get<Combox[]>(cb);
    return this.combox$;
  }

  public getCombox(funcao, tabela, campo_id, campo_nome, val_campo_id, params?): Observable<Combox[]> {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_id
      + '/' + campo_nome
      + '/' + val_campo_id;
    if (params) {
      cb += '/' + params;
    }
    this.combox$ = this.http.get<Combox[]>(cb);
    return this.combox$;
  }

  public getCombox2Valores(funcao, tabela, campo_id, campo_nome, campo_nome2, val_campo_id, params?): Observable<Combox2Valores[]> {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_id
      + '/' + campo_nome
      + '/' + campo_nome2
      + '/' + val_campo_id;
    if (params) {
      cb += '/' + params;
    }
    this.combox2valores$ = this.http.get<Combox2Valores[]>(cb);
    return this.combox2valores$;
  }

  public getComboxSoNomeAgrupado(funcao, tabela, campo_nome, clausula = '0', params?): Observable<ComboxSoNomeAgrupado[]> {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_nome
      + '/' + clausula;
    if (params) {
      cb += '/' + params;
    }

    this.comboxsonomeagrupado$ = this.http.get<ComboxSoNomeAgrupado[]>(cb);
    return this.comboxsonomeagrupado$;
  }

  public getComboxSimplesAgrupado(funcao, tabela, campo_id, campo_nome, clausula = '0', params?): Observable<Combox[]> {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_id
      + '/' + campo_nome
      + '/' + clausula;
    if (params) {
      cb += '/' + params;
    }

    this.combox$ = this.http.get<Combox[]>(cb);
    return this.combox$;
  }

  public getComboxSimplesAgrupadoIdtxt(funcao, tabela, campo_id, campo_nome, clausula = '0', params?): Observable<ComboxIdtxt[]> {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_id
      + '/' + campo_nome
      + '/' + clausula;
    if (params) {
      cb += '/' + params;
    }

    this.comboxIdtxt$ = this.http.get<ComboxIdtxt[]>(cb);
    return this.comboxIdtxt$;
  }

  public getComboxSoNome(funcao, tabela, campo_nome, params?) {
    let cb: string;
    cb = this.comboxUrl
      + '/' + funcao
      + '/' + tabela
      + '/' + campo_nome;
    if (params) {
      cb += '/' + params;
    }

    this.comboxsonomeagrupado$ = this.http.get<ComboxSoNomeAgrupado[]>(cb);
    return this.comboxsonomeagrupado$;
  }

}
