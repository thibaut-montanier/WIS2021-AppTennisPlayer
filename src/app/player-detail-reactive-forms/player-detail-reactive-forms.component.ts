import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TennisPlayer } from '../Model/tennis-player';

import { TennisPlayersService } from '../service/tennis-players.service';

@Component({
  selector: 'app-player-detail-reactive-forms',
  templateUrl: './player-detail-reactive-forms.component.html',
  styleUrls: ['./player-detail-reactive-forms.component.scss']
})
export class PlayerDetailReactiveFormsComponent implements OnInit {

  @Input() set activePlayer(value: TennisPlayer){
    this.playerForm.patchValue(value);
  }
  playerForm=this.fb.group({
    id:[''],
    firstName:[''],
    lastName:['', [Validators.required, Validators.minLength(3)]]
  });
  constructor(private fb : FormBuilder, private _tennisPlayerSrv: TennisPlayersService) { }

  ngOnInit(): void {
  }


  showErrorMessage(control: AbstractControl, errorName:string){
    return control.touched && control.hasError(errorName);
  }
  onValidate(){
    this._tennisPlayerSrv.updatePlayer(this.playerForm.value);

  }

}
