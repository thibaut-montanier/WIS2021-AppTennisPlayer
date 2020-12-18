import { Component, OnInit } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {



  public players : TennisPlayer[]=[
    {id: 1, lastName: "Sampras", firstName: "Pete", birthDate:"1971/08/12", prizeList:["Open d'Australie"]},
    {id: 2, lastName: "Forget", firstName: "Guy", birthDate:"1965/01/04", prizeList:[] }, 
    {id: 3,lastName: "Courier",firstName: "Jim",birthDate:"1970/08/17", prizeList:["Roland-Garros", "Open d'Australie"]}
    ];

    
    
  public player: TennisPlayer = {id: 1, lastName: "Federer", firstName: "Pete", birthDate:"1971/08/12", prizeList:["Open d'Australie"]}
  public player2: TennisPlayer = {id: 1, lastName: "Nadal", firstName: "Pete", birthDate:"1971/08/12", prizeList:["Open d'Australie"]}

  constructor() { }

  ngOnInit(): void {

    

  }

  public onclick(){
    this.player.firstName="toto";
  }

}
