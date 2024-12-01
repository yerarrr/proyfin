import { Component } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-register',
  template: `
    <form (ngSubmit)="register()">
      <input type="email" [(ngModel)]="email" name="email" placeholder="Correo" required />
      <input type="password" [(ngModel)]="password" name="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  `,
  imports: [FormsModule],
})
export class RegisterComponent {
  email = '';
  password = '';

  constructor(private auth: Auth, private router: Router) {}

  register() {
    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => this.router.navigate(['/']))
      .catch(error => console.error('Error al registrarse:', error));
  }
}
