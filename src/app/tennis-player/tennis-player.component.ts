import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';
import { TennisPlayersService } from '../service/tennis-players.service';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

  // propriétés du composants
  public isInAddingMode = false;
  public players : TennisPlayer[];

    
    
  public player: TennisPlayer = {id: 1, lastName: "Federer", firstName: "Pete", birthDate:"1971/08/12", prizeList:['Open d\'Australie']}
  

  // méthodes et fonctions
  constructor(private playersSrv : TennisPlayersService) {
    debugger;
      this.players = playersSrv.players;
   }

  ngOnInit(): void {
  }

  public selectPlayer(activePlayer: TennisPlayer){
    this.player =activePlayer;
  }

  public onclick() {
    this.player.firstName="toto";
  }


  public Ajouter(){
    this.isInAddingMode =true;
    this.player = new TennisPlayer();
  }

  public Valider(){
    debugger;
    this.playersSrv.addPlayer(this.player);
    //this.players.push(this.player);
    this.isInAddingMode = false;
  }

}
