import {Component, OnInit} from '@angular/core';
import {NorteInterface, Totalnterface} from '../dados/dados.interface';
import {DadosService} from '../dados/dados.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-norte',
  templateUrl: './norte.component.html',
  styleUrls: ['./norte.component.css']
})
export class NorteComponent implements OnInit {

  nortes: NorteInterface[];
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
    this.sortField = 'parlamentar_nome';
  }

  ngOnInit() {
    this.getNortes();
    this.cols = [
      {field: 'parlamentar_id', header: 'ID', sortable: false, largura: '70px'},
      {field: 'parlamentar_nome', header: 'PARLAMENTAR', sortable: false, largura: '200px'},
      {field: 'parlamentar_login', header: 'LOGIN', sortable: false, largura: '200px'},
      {field: 'parlamentar_senha', header: 'SENHA', sortable: true, largura: '200px'},
      {field: 'parlamentar_db', header: 'BASE', sortable: false, largura: '200px'},
      {field: 'parlamentar_ativo', header: 'ATIVO', sortable: false, largura: '100px'},
      {field: 'dt_cadastro', header: 'DT CADASTRO', sortable: true, largura: '200px'},
      {field: 'dt_ativacao', header: 'DT ATIVAÇÃO', sortable: false, largura: '200px'},
      {field: 'dt_desativacao', header: 'DT DESATIVAÇÃO', sortable: false, largura: '200px'},
      {field: 'dt_apagado', header: 'DT APAGADO', sortable: false, largura: '200px'},
      {field: 'apagado', header: 'APAGADO', sortable: true, largura: '130px'},
      {field: 'assinante', header: 'ASSINANTE', sortable: false, largura: '150px'},

    ];
    this.selectedColumns = this.cols;
  }

  getNortes() {
    this.dadosService.getNorteLer(this.first, this.rows, this.sortField, this.sortOrder)
      .subscribe({
        next: (dados) => {
          this.nortes = dados.nortes;
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
    return this.nortes;
  }

}
