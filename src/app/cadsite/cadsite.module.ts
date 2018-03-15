import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadsiteComponent} from './cadsite.component';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    TableModule
  ],
  declarations: [CadsiteComponent]
})
export class CadsiteModule {
}
