import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

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
