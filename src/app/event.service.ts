import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST, GET',
    'Access-Control-Allow-Headers':'X-PINGOTHER, Content-Type'
  })
};


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { 
    
  }

  public getEvents(){
    return this.http.get("/api/evenements/", optionRequete);
 
  }
}
