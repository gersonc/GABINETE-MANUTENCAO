import {Component, OnInit} from '@angular/core';
import {CadsiteInterface, Totalnterface} from '../dados/dados.interface';
import {DadosService} from '../dados/dados.service';
import {Subscription} from 'rxjs/Subscription';
import {SelectItem} from 'primeng/api';

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
  selectedColumns: any[];


  constructor(private dadosService: DadosService) {
    this.first = 0;
    this.rows = 10;
    this.sortOrder = 'DESC';
    this.sortField = 'gab_datetime';
  }

  ngOnInit() {
    this.getCadsites();
    this.cols = [
      {field: 'gab_id', header: 'ID', sortable: false, largura: '70px'},
      {field: 'gab_nome', header: 'NOME', sortable: false, largura: '200px'},
      {field: 'gab_email', header: 'E-MAIL', sortable: false, largura: '250px'},
      {field: 'gab_telefone', header: 'TELEFONE', sortable: true, largura: '150px'},
      {field: 'gab_cidade', header: 'NUMICÍPIO', sortable: false, largura: '250px'},
      {field: 'gab_estado', header: 'UF', sortable: false, largura: '70px'},
      {field: 'gab_nome_parlamentar', header: 'PARLAMENTAR', sortable: true, largura: '200px'},
      {field: 'gab_cargo', header: 'CARGO', sortable: false, largura: '150px'},
      {field: 'gab_datetime', header: 'DATA', sortable: false, largura: '200px'},
      {field: 'gab_chave', header: 'CHAVE', sortable: true, largura: '130px'},
      {field: 'gab_ativado', header: 'ATIVADO', sortable: false, largura: '120px'},
      {field: 'gab_norte_id', header: 'NORTE_ID', sortable: false, largura: '120px'},
      {field: 'gab_observacoes', header: 'OBS', sortable: true, largura: '200px'}
    ];
    this.selectedColumns = this.cols;
  }

  getCadsites() {
    this.dadosService.getSiteLer(this.first, this.rows, this.sortField, this.sortOrder)
      .subscribe({
        next: (dados) => {
          this.cadsites = dados.cad;
          this.total = dados.total;
          console.log(this.total['num']);
          this.totalRecords = this.total['num'];
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
