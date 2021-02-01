import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':  'https://agentu.herokuapp.com/',
    'Access-Control-Allow-Methods':  'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':  'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Credentials':  'true',
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('agentu:AgentU@2020')
  })
};

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { 
    
  }

  public getEvents(){
   // this.http.get("https://agentu.herokuapp.com/evenements/" ,{withCredentials: true })
    return this.http.get("https://agentu.herokuapp.com/evenements/");
 
  }
}
