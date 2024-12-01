import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
  // Ruta predeterminada que redirige a "login"
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta para el componente de inicio de sesión
  { path: 'login', component: LoginComponent },

  // Ruta para el componente de registro
  { path: 'register', component: RegisterComponent },

  // Ruta comodín para páginas no encontradas
  { path: '**', redirectTo: 'login' },
];

import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideRouter, Route } from '@angular/router';

const routes: Route[] = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
  { path: '**', redirectTo: '' }, // Redirección por defecto
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
