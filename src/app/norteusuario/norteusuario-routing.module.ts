import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NorteusuarioComponent} from './norteusuario.component';

const NorteusuarioRoutes: Routes = [
  {path: 'norteusuario', component: NorteusuarioComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(NorteusuarioRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NorteusuarioeRoutingModule {
}
