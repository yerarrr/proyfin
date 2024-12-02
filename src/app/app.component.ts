import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <header style="background-color: green; color: white; padding: 10px; text-align: center;">
      <nav>
        <a routerLink="/" routerLinkActive="active" style="margin: 0 15px;">Inicio</a>
        <a routerLink="/login" routerLinkActive="active" style="margin: 0 15px;">Iniciar Sesión</a>
        <a routerLink="/register" routerLinkActive="active" style="margin: 0 15px;">Registrarse</a>
      </nav>
    </header>

    <router-outlet></router-outlet>  <!-- Aquí se cargarán los componentes según la ruta -->
  `,
  imports: [RouterModule],  // Asegúrate de incluir RouterModule aquí
})
export class AppComponent {}
