import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TennisPlayer } from '../Model/tennis-player';
import { TennisPlayersService } from '../service/tennis-players.service';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {



  @Input() public activePlayer : TennisPlayer;


  public playerId:string;
  constructor(private _actRoute: ActivatedRoute, private _playerSrv : TennisPlayersService) { }

  ngOnInit(): void {

    this._actRoute.paramMap
    .subscribe((data)=>{
      console.log(data);
      this.playerId = data.get('id');
      // récupération du joueur par son id
      // transformation de this.playerId de string à numérique
      this.activePlayer = this._playerSrv.getPlayerById(Number(this.playerId));
    })
  }

}
