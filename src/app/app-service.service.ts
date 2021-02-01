import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http:HttpClient) { }

  public getEtudiant(id:string){
     return this.http.get("https://agentu.herokuapp.com/etudiants/"+id);
  
   }

   public setEtudiant(mdp: string){
    return this.http.get("https://agentu.herokuapp.com/etudiants/");
 
  }
}
