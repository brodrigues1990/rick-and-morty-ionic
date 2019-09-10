import { Component } from '@angular/core';
import { REMServices } from '../../services/remservices';
import { Personagens } from "../../models/Personagens";

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage  {

  public obj: any;
  //public characters: any;
  personagens: Personagens[] = [];

  constructor(private remServices: REMServices){}

  ionViewDidEnter(){
	  
    this.remServices.getCharacter().subscribe((data)=>{
		this.obj = data;
		this.personagens = this.obj.results;
    });
  }

}
