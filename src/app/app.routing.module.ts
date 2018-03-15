import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'AppComponent'}
  // { path: 'cadastro', loadChildren: 'app/cadastro/cadastro.module#CadastroModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
