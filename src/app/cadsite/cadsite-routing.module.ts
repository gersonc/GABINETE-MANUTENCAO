import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CadsiteComponent} from './cadsite.component';

const cadsiteRoutes: Routes = [
  {path: 'cadsite', component: CadsiteComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(cadsiteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CadsiteRoutingModule {
}
