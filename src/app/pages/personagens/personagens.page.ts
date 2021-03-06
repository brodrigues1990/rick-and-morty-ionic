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
  page = 1;
  constructor(private remServices: REMServices){}

  ngOnInit(){
	this.remServices
	.getCharacter(`${this.page}`)
	.subscribe((data)=>{
		console.log(data);
		this.obj = data;
		this.personagens = this.obj.results;
    });
  }

  doInfinite(event){
		console.log(event);
		this.page++;
		this.remServices
		.getCharacter(`${this.page}`)
		.subscribe((data)=>{
			console.log(data);
			for(const personagem of data[`results`]){
				this.personagens.push(personagem);
			}
			event.target.complete();
		});
  }

}
