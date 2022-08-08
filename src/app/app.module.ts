import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';

import { AppComponent } from './app.component';

import { TissueCollectionService } from './services/tissue_collection/tissue_collection.service';
import { TissueSampleService } from './services/tissue_sample/tissue_sample.service';
import { TissuecollectionEditComponent } from './components/public/tissuecollection-edit/tissuecollection-edit.component';
import { TissuecollectionInfoComponent } from './components/public/tissuecollection-info/tissuecollection-info.component';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { TissuecollectionDetailsComponent } from './components/public/tissuecollection-details/tissuecollection-details.component';
import { NavbarComponent } from './components/main/navbar/navbar.component';
import { TissuesampleInfoComponent } from './components/public/tissuesample-info/tissuesample-info.component';
import { HomeComponent } from './components/public/home/home/home.component';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TissuecollectionEditComponent,
    TissuecollectionInfoComponent,
    TissuecollectionDetailsComponent,
    NavbarComponent,
    TissuesampleInfoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MdbCollapseModule 
  ],
  providers: [
    TissueCollectionService,
    TissueSampleService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

