import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/etudiant';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndEtudiant';

  etudiant: any = new Etudiant("","","","","",0,0,0,0,"",null,null);
 constructor(private service:AppServiceService) { 
   
 }

 ngOnInit(): void {
  this.getEtudiant();
  
 
}

public getEtudiant(){
  let resp = this.service.getEtudiant("15265");
  resp.subscribe((data)=>this.etudiant=data);
}



public setEtudiant(){

  this.etudiant.incidents = null;
  this.etudiant.rendezVous = null;
  alert(this.etudiant.mail);
  let resp = this.service.setEtudiant(this.etudiant);
  resp.subscribe((data)=>this.etudiant=data); 
}


}
