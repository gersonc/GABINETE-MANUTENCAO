import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';

import {DadosModule} from '../dados/dados.module';
import {NorteComponent} from './norte.component';
import {NorteRoutingModule} from './norte-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    FormsModule,
    DadosModule,
    MultiSelectModule,
    TableModule,
    NorteRoutingModule
  ],
  declarations: [NorteComponent],
  exports: [NorteComponent]
})
export class NorteModule {
}
