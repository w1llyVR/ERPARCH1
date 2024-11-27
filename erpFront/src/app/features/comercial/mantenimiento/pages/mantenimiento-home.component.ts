import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'mantenimiento-home',
  imports: [
    RouterOutlet
  ],
  template: `
    <h1>Mantenimiento Home</h1>
    <router-outlet></router-outlet>
  `
})
export class MantenimientoHomeComponent{

}
