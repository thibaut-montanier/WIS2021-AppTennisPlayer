import { Component, Input, OnInit } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';
import { TennisPlayersService } from '../service/tennis-players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {


  @Input() public currentModifiedPlayer : TennisPlayer;
  constructor(private playersSrv : TennisPlayersService) { }

  ngOnInit(): void {
  }

}