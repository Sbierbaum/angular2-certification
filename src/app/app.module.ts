import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


import { AppComponent } from './app.component';
import { TrackTeamComponent } from './track-team/track-team.component';
import { HomeComponent } from './home/home.component';
import { httpInterceptorProviders } from './http-interceptors';
import { CardTeamComponent } from './card-team/card-team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TrackTeamComponent,
    HomeComponent,
    CardTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
