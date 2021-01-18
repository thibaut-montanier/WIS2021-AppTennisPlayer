import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';
import { TennisPlayersService } from '../service/tennis-players.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent implements OnInit {


  @Input() public currentModifiedPlayer : TennisPlayer;

  @Input() public isInAddingMode : boolean;

  @Output() public jobFinished = new EventEmitter<boolean>()



  constructor(private playersSrv : TennisPlayersService) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.jobFinished.emit(true);
  }

  onSubmit(){
    this.playersSrv.addPlayer(this.currentModifiedPlayer);
    this.jobFinished.emit(true);
  }

}
