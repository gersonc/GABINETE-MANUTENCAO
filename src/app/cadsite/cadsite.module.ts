import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadsiteRoutingModule} from './cadsite-routing.module';
import {CadsiteComponent} from './cadsite.component';
import {MultiSelectModule} from 'primeng/multiselect';
import {DadosModule} from '../dados/dados.module';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
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
