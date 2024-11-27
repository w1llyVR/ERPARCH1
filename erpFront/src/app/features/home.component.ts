import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'home',
  imports: [
    RouterOutlet
  ],
  template: `
    <h1>Home</h1>
    <router-outlet></router-outlet>
  `
})
export class HomeComponent{}
