import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonComposantPourLaRouteComponent } from './mon-composant-pour-la-route/mon-composant-pour-la-route.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';
import { PlayerFormComponent } from './player-form/player-form.component';
import { TennisPlayerComponent } from './tennis-player/tennis-player.component';


const routes: Routes = [
  {path:'', component: TennisPlayerComponent},
  {path:'players', component: TennisPlayerComponent},
  {path:'add-player', component: PlayerFormComponent},
  {path:'player-detail/:id', component: PlayerDetailComponent},
  {path:'route2', component:MonComposantPourLaRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
