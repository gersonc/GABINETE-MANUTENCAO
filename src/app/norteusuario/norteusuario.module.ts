import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';

import {DadosModule} from '../dados/dados.module';
import {NorteusuarioeRoutingModule} from './norteusuario-routing.module';
import {NorteusuarioComponent} from './norteusuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TableModule,
    MultiSelectModule,
    DadosModule,
    NorteusuarioeRoutingModule
  ],
  declarations: [
    NorteusuarioComponent
  ],
  exports: [
    NorteusuarioComponent
  ]
})
export class NorteusuarioModule {
}
