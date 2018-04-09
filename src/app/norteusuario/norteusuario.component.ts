import {Component, OnInit} from '@angular/core';
import {UsuarioInterface, Totalnterface} from '../dados/dados.interface';
import {DadosService} from '../dados/dados.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-norteusuario',
  templateUrl: './norteusuario.component.html',
  styleUrls: ['./norteusuario.component.css']
})
export class NorteusuarioComponent implements OnInit {

  usuarios: UsuarioInterface[];
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
    this.sortField = 'usuario_nome';
    console.log('contructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.getNorteusuarios();
    this.cols = [
      {field: 'usuario_id', header: 'ID', sortable: false, largura: '70px'},
      {field: 'usuario_nome', header: 'NOME', sortable: false, largura: '200px'},
      {field: 'usuario_email', header: 'E-MAIL', sortable: false, largura: '250px'},
      {field: 'usuario_senha', header: 'SENHA', sortable: true, largura: '150px'},
      {field: 'usuario_cargo', header: 'CARGO', sortable: false, largura: '200px'},
      {field: 'usuario_celular', header: 'CELULAR', sortable: true, largura: '200px'},
      {field: 'primeiro_acesso', header: '1\u00BA ACESSO', sortable: false, largura: '130px'},
      {field: 'usuario_db', header: 'BASE', sortable: false, largura: '150px'},
      {field: 'norte_parlamentar_id', header: 'PARLAMENTAR ID', sortable: false, largura: '200px'},
      {field: 'usuario_acesso', header: 'ACESSO', sortable: true, largura: '900px'}
    ];
    this.selectedColumns = this.cols;
  }

  getNorteusuarios() {
    console.log('getNorteusuarios');
    this.dadosService.getUsuarioLer(this.first, this.rows, this.sortField, this.sortOrder)
      .subscribe({
        next: (dados) => {
          this.usuarios = dados.norteusuarios;
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
    return this.usuarios;
  }

}
