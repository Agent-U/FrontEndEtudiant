import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Incident } from '../../model/incident';

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

  public getEtudiantWithId(id:string){
    return this.http.get("/api/etudiants/"+id,optionRequete);
  }

  public addIncident(incidents:Incident){
    return this.http.post("/api/incidents/",incidents,optionRequete);
  }  

  

  public deleteIncident(id:number){
    return this.http.delete("/api/incidents/delete/"+id,optionRequete);
  }  
}
