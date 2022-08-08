import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TissueCollectionService } from './services/tissue_collection/tissue-collection.service';
import { TissuesampleService } from './services/tissue_sample/tissue_sample.service';
import { TissuecollectionEditComponent } from './components/public/tissuecollection-edit/tissuecollection-edit.component';
import { TissuecollectionInfoComponent } from './components/public/tissuecollection-info/tissuecollection-info.component';
import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { TissuecollectionDetailsComponent } from './components/public/tissuecollection-details/tissuecollection-details/tissuecollection-details.component';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TissuecollectionEditComponent,
    TissuecollectionInfoComponent,
    HomeinfoComponent,
    TissuecollectionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    TissueCollectionService,
    TissuesampleService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

