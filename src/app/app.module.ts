import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { HomeComponent } from './home/home.component';
import { EventService } from './event.service';
import { IncidentsComponent } from './incidents/incidents.component';
import { FormsModule } from '@angular/forms';
import { IncidentsService } from './serviceIncidents/incidents.service';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    HomeComponent,
    IncidentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventService,
              IncidentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
