import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TennisPlayerComponent } from './tennis-player/tennis-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { MonComposantPourLaRouteComponent } from './mon-composant-pour-la-route/mon-composant-pour-la-route.component';
import { PlayerDetailReactiveFormsComponent } from './player-detail-reactive-forms/player-detail-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    PlayerDetailComponent,
    PlayerFormComponent,
    MonComposantPourLaRouteComponent,
    PlayerDetailReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
