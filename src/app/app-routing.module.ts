import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeinfoComponent } from './components/public/homeinfo/homeinfo.component';

const routes: Routes = [

  { path: '', component: HomeinfoComponent },

  { path: 'home', component : HomeinfoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [

  HomeinfoComponent
  ];