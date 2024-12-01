import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-login',
  template: `
    <form (ngSubmit)="login()">
      <input type="email" [(ngModel)]="email" placeholder="Correo" />
      <input type="password" [(ngModel)]="password" placeholder="Contraseña" />
      <button type="submit">Iniciar Sesión</button>
    </form>
  `,
  imports: [FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private auth: Auth) {}

  login() {
    signInWithEmailAndPassword(this.auth, this.email, this.password)
      .then(user => console.log('Usuario autenticado:', user))
      .catch(error => console.error('Error:', error));
  }
}
