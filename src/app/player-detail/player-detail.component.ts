import { Component, Input, OnInit } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {



  @Input() public activePlayer : TennisPlayer;
  constructor() { }

  ngOnInit(): void {
  }

}
