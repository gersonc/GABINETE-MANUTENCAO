import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NorteComponent} from './norte.component';

const NorteRoutes: Routes = [
  {path: 'norte', component: NorteComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(NorteRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NorteRoutingModule {
}
