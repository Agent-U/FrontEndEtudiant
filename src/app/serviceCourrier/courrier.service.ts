import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


const optionRequete = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'POST, GET, PUT',
    'Access-Control-Allow-Headers':'X-PINGOTHER, Content-Type'
  })
};
@Injectable({
  providedIn: 'root'
})


export class CourrierService {
  

  constructor(private http:HttpClient) { }

  public getCourriers(id : string){
    return this.http.get("/api/etudiants/"+id, optionRequete);
 
  }

  
}
