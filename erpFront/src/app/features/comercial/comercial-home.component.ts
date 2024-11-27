import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'comercial-home',
  imports: [
    RouterOutlet
  ],
  template: `
    <h1>Comercial Home</h1>
    <router-outlet></router-outlet>
  `
})
export class ComercialHomeComponent{

}
