import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CampoControlErroComponent} from './campo-control-erro/campo-control-erro.component';
import {FormDebugComponent} from './form-debug/form-debug.component';
import {ComboxComponent} from './combox/combox.component';
import {ComboxService} from './combox/combox.service';
import {CepService} from './cep/cep.service';
import {AutocompleteService} from './autocomplete/autocomplete.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './messages/message.service';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [
    CampoControlErroComponent,
    FormDebugComponent,
    ComboxComponent,
    MessagesComponent
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent
  ],
  providers: [
    ComboxService,
    CepService,
    AutocompleteService,
    MessageService
  ]
})
export class UtilModule {
}
