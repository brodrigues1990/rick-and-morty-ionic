import { Component } from '@angular/core';
import { REMServices } from '../../services/remservices';
@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.page.html',
  styleUrls: ['./personagens.page.scss'],
})
export class PersonagensPage  {

  constructor(private remServices: REMServices){}

  ionViewDidEnter(){

    this.remServices.getCharacter().subscribe((data)=>{
      console.log(data);
    });
  }

}
