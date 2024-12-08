import { Routes } from '@angular/router';
import { privateGuard, publicGuard } from './core/auth-guard';

export const routes: Routes = [
  {
    canActivateChild: [publicGuard()],
    path: 'auth',
    loadChildren: () => import('./auth/features/auth.routes'),
  },
  {
    canActivateChild: [privateGuard()],
    path: '',
    loadComponent: () => import('./shared/ui/layout.component'),

  },
  {
    path: '**',
    redirectTo: '',
  },
];