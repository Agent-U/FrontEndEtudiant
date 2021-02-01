import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [

  {
  path:"", component:HomeComponent},
  {path:"evenements",component:EventComponent},
  {path:"incidents",component:IncidentsComponent},
  {path:"", component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
