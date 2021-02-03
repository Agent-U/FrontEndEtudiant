import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';

import { HomeComponent } from './home/home.component';
import { AppServiceService } from './app-service.service';

import { EventService } from './event.service';
import { IncidentsComponent } from './incidents/incidents.component';

import { IncidentsService } from './serviceIncidents/incidents.service';
import { CourrierComponent } from './courrier/courrier.component';
import {CourrierService} from './serviceCourrier/courrier.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
    HomeComponent,
    IncidentsComponent,
    CourrierComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [EventService,
              IncidentsService,
              AppServiceService,
              CourrierService
            ],

  bootstrap: [AppComponent]
})
export class AppModule { }
