import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Incident } from '../incident';

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
export class IncidentsService {


  

  constructor(private http:HttpClient) { }

  public getIncidents(){
    return this.http.get("/api/incidents/",optionRequete);
 
  }



}
