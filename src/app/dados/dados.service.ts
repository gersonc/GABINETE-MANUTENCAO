import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CadsitePaginacaoInterface} from './dados.interface';


@Injectable()
export class DadosService {

  private gab$: Observable<CadsitePaginacaoInterface>;
  private siteUrl = 'http://manutencao.gabinet.com.br/api/';

  constructor(private http: HttpClient) {
  }

  getSiteLer(start: number = null,
             limit: number = null,
             sort: string = 'gab_datetime',
             order: string = 'DESC'): Observable<CadsitePaginacaoInterface> {
    let url = this.siteUrl + 'site/ler.php?a=1';
    if (start) {
      url += '&_start=' + start;
    }
    if (limit) {
      url += '&_limit=' + limit;
    }
    if (sort) {
      url += '&_sort=' + sort;
    }
    if (order) {
      url += '&_order=' + order;
    }
    return this.http.get<CadsitePaginacaoInterface>(this.siteUrl);
  }

}
