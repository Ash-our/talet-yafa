import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { initializeAppCheck, ReCaptchaEnterpriseProvider, provideAppCheck } from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getDataConnect, provideDataConnect } from '@angular/fire/data-connect';
import { connectorConfig } from '@firebasegen/default-connector';
import { provideTanStackQuery, QueryClient } from '@tanstack/angular-query-experimental';
import { getFunctions, provideFunctions } from '@angular/fire/functions';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { getRemoteConfig, provideRemoteConfig } from '@angular/fire/remote-config';
import { getVertexAI, provideVertexAI } from '@angular/fire/vertexai';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "project-a2-7b9e8", appId: "1:423221934609:web:126218f73b12c959f08fb0", databaseURL: "https://project-a2-7b9e8-default-rtdb.europe-west1.firebasedatabase.app", storageBucket: "project-a2-7b9e8.firebasestorage.app", apiKey: "AIzaSyDLrpLTvmqdthZlDs6B9GvK6RtxFfV3GyU", authDomain: "project-a2-7b9e8.firebaseapp.com", messagingSenderId: "423221934609", measurementId: "G-PLSVLXGESZ" })), provideAuth(() => getAuth()), provideAnalytics(() => getAnalytics()), ScreenTrackingService, UserTrackingService, provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase()), provideDataConnect(() => getDataConnect(connectorConfig)), provideTanStackQuery(new QueryClient()), provideFunctions(() => getFunctions()), provideMessaging(() => getMessaging()), providePerformance(() => getPerformance()), provideStorage(() => getStorage()), provideRemoteConfig(() => getRemoteConfig()), provideVertexAI(() => getVertexAI())]
});
