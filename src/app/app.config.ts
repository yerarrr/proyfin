import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"proyfin-50bf3","appId":"1:733333223618:web:6ecbec040df546bf6c235b","storageBucket":"proyfin-50bf3.firebasestorage.app","apiKey":"AIzaSyBKGCeSi8thK0x1XWhEnnN-x4GBGa1B1ls","authDomain":"proyfin-50bf3.firebaseapp.com","messagingSenderId":"733333223618","measurementId":"G-SJP8CH2VW2"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())]
};
