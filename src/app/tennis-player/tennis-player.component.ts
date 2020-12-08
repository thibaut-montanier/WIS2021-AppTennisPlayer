import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tennis-player',
  templateUrl: './tennis-player.component.html',
  styleUrls: ['./tennis-player.component.scss']
})
export class TennisPlayerComponent implements OnInit {

  public playerName : string = "Nadal";
  public playerCls : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
