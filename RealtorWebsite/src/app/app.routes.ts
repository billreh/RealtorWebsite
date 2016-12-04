/**
 * New typescript file
 */
import {Routes, RouterModule} from '@angular/router';
import {AppRoutes} from './routes';
import { ModuleWithProviders} from '@angular/core';

export const routes: Routes = [
    ...AppRoutes
];

export const routing = RouterModule.forRoot(routes, { useHash: true } );
