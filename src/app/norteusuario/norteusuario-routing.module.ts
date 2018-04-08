import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NorteusuarioComponent} from './norteusuario.component';

const NorteusuarioComponentRoutes: Routes = [
  {path: 'norteusuario', component: NorteusuarioComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(NorteusuarioComponentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NorteusuarioeRoutingModule {
}
