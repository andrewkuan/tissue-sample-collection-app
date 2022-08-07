import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';

import { TissuecollectionService } from './services/tissue_collection/tissue_collection.service';
import { TissuesampleService } from './services/tissue_sample/tissue_sample.service';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

@NgModule({
  declarations: [
    AppComponent,
    HomeinfoComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule
  ],
  providers: [
    TissuecollectionService,
    TissuesampleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPuInNRsNxnM3glnVVuB0XgknyEXVfMDM",
  authDomain: "tissue-sample-collection-app.firebaseapp.com",
  projectId: "tissue-sample-collection-app",
  storageBucket: "tissue-sample-collection-app.appspot.com",
  messagingSenderId: "79317614287",
  appId: "1:79317614287:web:e64b6683aec1efa7da81ba",
  measurementId: "G-M27LR47Q3B"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db:any) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

