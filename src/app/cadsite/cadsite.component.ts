import {Component, OnInit} from '@angular/core';
import {CadsiteInterface, Totalnterface} from '../dados/dados.interface';
import {DadosService} from '../dados/dados.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cadsite',
  templateUrl: './cadsite.component.html',
  styleUrls: ['./cadsite.component.css']
})
export class CadsiteComponent implements OnInit {

  cadsites: CadsiteInterface[];
  loading = true;
  cols: any[];
  totalRecords: number;
  first: number;
  rows: number;
  total: Totalnterface[];
  sortField: any;
  sortOrder: string;
  conta = 0;


  constructor(private dadosService: DadosService) {
    this.first = 0;
    this.rows = 10;
    this.sortOrder = 'DESC';
    this.sortField = 'gab_datetime';
  }

  ngOnInit() {
    this.cols = [
      {field: 'gab_id', header: 'ID', sortable: 'true', largura: '80px'},
      {field: 'gab_nome', header: 'NOME', sortable: 'true', largura: '80px'},
      {field: 'gab_email', header: 'E-MAIL', sortable: 'true', largura: '80px'},
      {field: 'gab_telefone', header: 'TELEFONE', sortable: 'false', largura: '80px'},
      {field: 'gab_cidade', header: 'NUMICÍPIO', sortable: 'true', largura: '80px'},
      {field: 'gab_estado', header: 'UF', sortable: 'true', largura: '80px'},
      {field: 'gab_nome_parlamentar', header: 'PARLAMENTAR', sortable: 'true', largura: '80px'},
      {field: 'gab_cargo', header: 'CARGO', sortable: 'true', largura: '80px'},
      {field: 'gab_datetime', header: 'DATA', sortable: 'true', largura: '80px'},
      {field: 'gab_chave', header: 'CHAVE', sortable: 'false', largura: '80px'},
      {field: 'gab_ativado', header: 'ATIVADO', sortable: 'true', largura: '80px'},
      {field: 'gab_norte_id', header: 'NORTE_ID', sortable: 'true', largura: '80px'},
      {field: 'gab_observacoes', header: 'OBS', sortable: 'falsed', largura: '80px'}
    ];
    this.getCadsites();
  }

  getCadsites() {
    this.dadosService.getSiteLer(this.first, this.rows, this.sortField, this.sortOrder)
      .subscribe({
        next: (dados) => {
          this.cadsites = dados.cad;
          this.total = dados.total;
          this.totalRecords = this.total[0].num;
        },
        error: err => console.error('FE-cadastro_datatable.postCadastroListarPaginacaoSort-ERRO-->', err),
        complete: () => {
          this.loading = false;
          this.conta++;
        }
      });
    return this.cadsites;
  }

}
