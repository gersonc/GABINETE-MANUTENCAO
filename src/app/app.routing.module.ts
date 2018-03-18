import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'AppComponent'},
  {path: 'cadsite', loadChildren: 'app/cadsite/cadsite.module#CadsiteModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
