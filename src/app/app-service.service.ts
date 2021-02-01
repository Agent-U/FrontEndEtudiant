import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

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
export class AppServiceService {

  constructor(private http:HttpClient) { }

  public getEtudiant(id:string){
     return this.http.get("/api/etudiants/"+id, optionRequete);
  
   }

   public setEtudiant(etudiant:any){
    return this.http.put("/api/etudiants/",etudiant,optionRequete);
 
  }
}
