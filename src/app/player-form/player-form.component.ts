import { Component, Input, OnInit } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {


  @Input() public currentModifiedPlayer : TennisPlayer;
  constructor() { }

  ngOnInit(): void {
  }

}
