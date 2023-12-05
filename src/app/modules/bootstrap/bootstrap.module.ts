import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

const Modules = [
  NgbModule,
  NgbNavModule
]

@NgModule({
  declarations: [],
  imports: Modules,

  exports: Modules
})


export class BootstrapModule { }
