import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MantenimientoHomeComponent} from './pages/mantenimiento-home.component';
import {ConductorComponent} from './components/conductor/conductor.component';

const routes: Routes = [
  {
    path: '',
    component: MantenimientoHomeComponent,
    children: [
      {
        path: 'conductor',
        component: ConductorComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MantenimientoRoutingModule {}
