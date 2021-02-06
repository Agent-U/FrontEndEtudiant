import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';

import { HomeComponent } from './home/home.component';
import { AppServiceService } from './app-service.service';

import { EventService } from './event.service';
import { IncidentsComponent } from './incidents/incidents.component';

import { IncidentsService } from './serviceIncidents/incidents.service';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { CourrierComponent } from './courrier/courrier.component';
import {CourrierService} from './serviceCourrier/courrier.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    HomeComponent,
    IncidentsComponent,
    RendezVousComponent,
    CourrierComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  providers: [EventService,
              IncidentsService,
              AppServiceService,
              CourrierService
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
