import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <header>
      <nav>
        <a routerLink="/">Inicio</a>
        <a routerLink="/login">Iniciar Sesión</a>
        <a routerLink="/register">Registrarse</a>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      header {
        background-color: #4caf50;
        color: white;
        padding: 1rem;
        text-align: center;
      }
      nav a {
        margin: 0 15px;
        color: white;
        text-decoration: none;
        font-size: 1.2rem;
      }
      main {
        margin: 2rem;
      }
    `,
  ],
  imports: [RouterOutlet],
})
export class AppComponent {}
