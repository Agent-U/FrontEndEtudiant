import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http:HttpClient) { }

  public getEvents(){
    return this.http.get("https://agentu.herokuapp.com/evenements/");
 
  }
}
