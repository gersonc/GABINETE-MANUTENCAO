import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AutocompleteService {

  private autocompleteUrl = 'http://slimgn01/autocomplete/acsimples';
  private acsimple$: Observable<any[]>;

  constructor(private http: HttpClient) {
  }

  getACSimples(tabela, campo_nome, str): Observable<any[]> {
    const ac = this.autocompleteUrl
      + '/' + tabela
      + '/' + campo_nome
      + '/' + str;
    this.acsimple$ = this.http.get<any[]>(ac);
    return this.acsimple$;
  }
}
