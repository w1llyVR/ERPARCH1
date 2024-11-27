import {bootstrapApplication, platformBrowser} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter} from '@angular/router';
import {importProvidersFrom} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {routes} from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide routing configuration
    importProvidersFrom(HttpClientModule, BrowserAnimationsModule), // Provide necessary modules
  ],
}).catch((err) => console.error(err));
