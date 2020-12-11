import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

  public player: TennisPlayer = {
    playerName:"Sampras",
    playerCls:1
  }

  constructor() { }

  ngOnInit(): void {

    this.player.playerCls=3;

  }

}
