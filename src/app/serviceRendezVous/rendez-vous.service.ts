import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RendezVous } from '../rendezVous';

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
export class RendezVousService {


  

  constructor(private http:HttpClient) { }

  public getRendezVous(){
    return this.http.get("/api/rendezVous/",optionRequete);
 
  }

  public getEtudiantWithId(id:string){
    return this.http.get("/api/etudiants/"+id,optionRequete);
  }

  public getAgents(){
    return this.http.get("/api/agents/",optionRequete);
  }
  

  public addRendezVous(rendezVous:RendezVous){
    return this.http.post("/api/rendezVous/",rendezVous,optionRequete);
  }  


  public deleteRendezVous(id:number){
    return this.http.delete("/api/rendezVous/delete/"+id,optionRequete);
  } 
  
  public editRendezVous(rendezVous:RendezVous){
    return this.http.put("/api/rendezVous/",rendezVous,optionRequete);
  }  
}