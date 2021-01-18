import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TennisPlayerComponent } from './tennis-player/tennis-player.component';
import { FormsModule } from '@angular/forms';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { MonComposantPourLaRouteComponent } from './mon-composant-pour-la-route/mon-composant-pour-la-route.component';

@NgModule({
  declarations: [
    AppComponent,
    TennisPlayerComponent,
    PlayerDetailComponent,
    PlayerFormComponent,
    MonComposantPourLaRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
