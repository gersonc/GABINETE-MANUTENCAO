import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CollapseModule, BsDropdownModule} from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import {UtilModule} from './util/util.module';
import {FooterComponent} from './core/footer/footer.component';
import {NavbarComponent} from './core/navbar/navbar.component';
import {CadsiteModule} from './cadsite/cadsite.module';
import {NorteusuarioModule} from './norteusuario/norteusuario.module';
import {NorteModule} from './norte/norte.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    CadsiteModule,
    NorteusuarioModule,
    NorteModule,
    AppRoutingModule,
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
