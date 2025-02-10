import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({"projectId":"todo-app-44a32","appId":"1:813176578629:web:bf59c9fc8e2bf336c5392c","databaseURL":"https://todo-app-44a32-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"todo-app-44a32.firebasestorage.app","apiKey":"AIzaSyC_1FLqkc6s0Oss4ptm4FsgnzUFXUVx_XI","authDomain":"todo-app-44a32.firebaseapp.com","messagingSenderId":"813176578629","measurementId":"G-L2X07TXH8K"})), provideFirestore(() => getFirestore())]
};
