import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root'
})

export class REMServices {
  URL_API = 'https://rickandmortyapi.com/api/';
 
  constructor(private http: HttpClient) { }
 

  getCharacter(){
    return this.http.get(`${this.URL_API}character/`);
  }
}