import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import {CepInterface} from './cep.interface';


@Injectable()
export class CepService {

  private cep$: Observable<CepInterface[]>;

  constructor(private http: HttpClient) {
  }

  public getCep(cep: string) {
    this.cep$ = this.http.get<CepInterface[]>(`//viacep.com.br/ws/${cep}/json`);
    return this.cep$;
  }

}
