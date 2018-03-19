import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadsiteRoutingModule} from './cadsite-routing.module';
import {CadsiteComponent} from './cadsite.component';
import {TableModule} from 'primeng/table';
import {DadosModule} from '../dados/dados.module';

@NgModule({
  imports: [
    CommonModule,
    CadsiteRoutingModule,
    DadosModule,
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
