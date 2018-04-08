import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';

import {DadosModule} from '../dados/dados.module';
import {CadsiteRoutingModule} from './cadsite-routing.module';
import {CadsiteComponent} from './cadsite.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CadsiteRoutingModule,
    DadosModule,
    MultiSelectModule,
    TableModule
  ],
  declarations: [
    CadsiteComponent
  ],
  exports: [
    CadsiteComponent
  ]
})
export class CadsiteModule {
}
