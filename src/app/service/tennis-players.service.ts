import { Injectable } from '@angular/core';
import { TennisPlayer } from '../Model/tennis-player';

@Injectable({
  providedIn: 'root'
})
export class TennisPlayersService {


  public players : TennisPlayer[]=[
    {id: 1, lastName: "Sampras", firstName: "Pete", birthDate:"1971/08/12", prizeList:["Open d'Australie"]},
    {id: 2, lastName: "Forget", firstName: "Guy", birthDate:"1965/01/04", prizeList:[] }, 
    {id: 4,lastName: "Courier",firstName: "Jim",birthDate:"1970/08/17", prizeList:["Roland-Garros", "Open d'Australie"]}
    ];

    
  constructor() { }


  public addPlayer(pl: TennisPlayer){
    // recherche de l'identifiant le plus élevé dans le tableau
    // pour créer un nouvel identifiant à notre joueur
    pl.id =  Math.max(...this.players.map(p=>p.id))+1;
    this.players.push(pl);
  }

  public updatePlayer(pl:TennisPlayer){
    if (pl.id == 0){
      this.addPlayer(pl);
    }
    else{
      const indexPlayer = this.players.findIndex((p)=> {
        const result = (p.id == pl.id);
        return result;
      });
  
      this.players[indexPlayer] = pl;
    }
  }
  public getPlayerById(id: number){
    // recherche du joueur par son identifiant
    return this.players.find((p)=> p.id == id);
  }
}
