import { NgModule } from '@angular/core';
import { MantenimientoModule } from './mantenimiento/mantenimiento.module';
import {ComercialRoutingModule} from './comercial-routing.module';

@NgModule({
  imports: [
    MantenimientoModule,
    ComercialRoutingModule
  ],
})
export class ComercialModule {}
