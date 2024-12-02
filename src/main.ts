import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { RouterModule} from '@angular/router';

const firebaseConfig = {
  apiKey: "AIzaSyBKGCeSi8thK0x1XWhEnnN-x4GBGa1B1ls",
  authDomain: "proyfin-50bf3.firebaseapp.com",
  projectId: "proyfin-50bf3",
  storageBucket: "proyfin-50bf3.firebasestorage.app",
  messagingSenderId: "733333223618",
  appId: "1:733333223618:web:6ecbec040df546bf6c235b",
  measurementId: "G-SJP8CH2VW2"
}

bootstrapApplication(AppComponent, {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
});

import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./app/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./app/register/register.component').then(m => m.RegisterComponent) },
  { path: '**', redirectTo: '' },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));
