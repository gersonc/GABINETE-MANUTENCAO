import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CadsitePaginacaoInterface} from './dados.interface';


@Injectable()
export class DadosService {

  private gab$: Observable<CadsitePaginacaoInterface>;
  private siteUrl = 'http://slimgn01/cadastro/incluirverificanome';

  constructor(private http: HttpClient) {
  }

  getSiteLer(): Observable<CadsitePaginacaoInterface> {
    return this.http.get<CadsitePaginacaoInterface>(this.siteUrl);
  }

}
