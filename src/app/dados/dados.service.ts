import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CadsitePaginacaoInterface, UsuarioPaginacaoInterface} from './dados.interface';


@Injectable()
export class DadosService {

  private gab$: Observable<CadsitePaginacaoInterface>;
  private siteUrl = 'http://nordeste.dv/api/';

  constructor(private http: HttpClient) {
  }

  getSiteLer(start: number = null,
             limit: number = null,
             sort: string = 'gab_datetime',
             order: string = 'DESC'): Observable<CadsitePaginacaoInterface> {
    let url = this.siteUrl + 'site/ler.php?a=1';
    console.log('api->', url);
    if (start) {
      url += '&_start=' + start;
    }
    console.log('api->', url);
    if (limit) {
      url += '&_limit=' + limit;
    }
    console.log('api->', url);
    if (sort) {
      url += '&_sort=' + sort;
    }
    console.log('api->', url);
    if (order) {
      url += '&_order=' + order;
    }

    // this.headers.set('Access-Control-Allow-Origin', '*');

    console.log('api->', url);
    return this.http.get<CadsitePaginacaoInterface>(url);
  }

  getUsuarioLer(start: number = null,
                limit: number = null,
                sort: string = 'usuario_nome',
                order: string = 'DESC'): Observable<UsuarioPaginacaoInterface> {
    let url = this.siteUrl + 'norteusuario/ler.php?a=1';
    console.log('api->', url);
    if (start) {
      url += '&_start=' + start;
    }
    console.log('api->', url);
    if (limit) {
      url += '&_limit=' + limit;
    }
    console.log('api->', url);
    if (sort) {
      url += '&_sort=' + sort;
    }
    console.log('api->', url);
    if (order) {
      url += '&_order=' + order;
    }

    // this.headers.set('Access-Control-Allow-Origin', '*');

    console.log('api->', url);
    return this.http.get<UsuarioPaginacaoInterface>(url);
  }

}
