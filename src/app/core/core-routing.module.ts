import { ModuleWithProviders } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';
import { MainComponent } from './containers/main/main.component';

const CORE_ROUTES: Routes = [
  { path: '', component: MainComponent }
];

const MODULE_CONFIG: ExtraOptions = !environment.production ? { enableTracing: true } : {};

export const CORE_ROUTER_MODULE: ModuleWithProviders = RouterModule.forRoot(CORE_ROUTES, MODULE_CONFIG);
