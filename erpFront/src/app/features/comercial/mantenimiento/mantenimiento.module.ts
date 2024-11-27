import {NgModule} from '@angular/core';
import {MantenimientoHomeComponent} from './pages/mantenimiento-home.component';
import {ConductorComponent} from './components/conductor/conductor.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MantenimientoRoutingModule} from './mantenimiento-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ConductorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,

    MantenimientoRoutingModule
  ]
})
export class MantenimientoModule {}
