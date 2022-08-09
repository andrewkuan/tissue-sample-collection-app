import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TissueCollectionService } from './services/tissue_collection/tissue_collection.service';
import { TissueSampleService } from './services/tissue_sample/tissue_sample.service';
import { TissuecollectionInfoComponent } from './components/public/tissuecollection-info/tissuecollection-info.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { TissuecollectionDetailsComponent } from './components/public/tissuecollection-details/tissuecollection-details.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { TissuesampleInfoComponent } from './components/public/tissuesample-info/tissuesample-info.component';
import { HomeComponent } from './components/public/home/home.component';
import { TissuesampleNewComponent } from './components/public/tissuesample-new/tissuesample-new.component';
import { TissuecollectionNewComponent } from './components/public/tissuecollection-new/tissuecollection-new.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { Overlay } from '@angular/cdk/overlay';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

@NgModule({
  declarations: [
    AppComponent,
    TissuecollectionInfoComponent,
    TissuecollectionDetailsComponent,
    NavbarComponent,
    TissuesampleInfoComponent,
    HomeComponent,
    TissuesampleNewComponent,
    TissuecollectionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdbCollapseModule ,
    FormsModule,
  ],
  providers: [
    TissueCollectionService,
    TissueSampleService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

