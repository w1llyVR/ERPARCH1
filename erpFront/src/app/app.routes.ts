import { Routes } from '@angular/router';
import {HomeComponent} from './features/home.component';

export const routes: Routes = [
  {
    path: 'comercial',
    component: HomeComponent,
    loadChildren: () =>
      // import('./features/comercial/comercial-routing.module').then((m) => m.ComercialRoutingModule),\
      import('./features/comercial/comercial.module').then((m) => m.ComercialModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: 'comercial' }, // Fallback route
];
