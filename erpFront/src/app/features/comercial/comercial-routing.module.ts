import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComercialHomeComponent} from './comercial-home.component';

const routes: Routes = [
  {
    path: 'mantenimiento',
    component: ComercialHomeComponent,
    loadChildren: () =>
      //import('./mantenimiento/mantenimiento-routing.module').then((m) => m.MantenimientoRoutingModule)
      import('./mantenimiento/mantenimiento.module').then((m) => m.MantenimientoModule)
  },
  {
    path: '',
    component: ComercialHomeComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComercialRoutingModule {}
