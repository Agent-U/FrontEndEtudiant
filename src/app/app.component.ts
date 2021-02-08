import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/model/etudiant';
import { Acceuil } from 'src/model/acceuil';
import { AppServiceService } from './app-service.service';
import { CourrierService } from './serviceCourrier/courrier.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndEtudiant';
  nbIncidents : any;
  etudiant: any = new Etudiant("23");
  isClose : any;
  nbincident :number = 0;



 constructor(private service:AppServiceService) { 
   
 }

 ngOnInit(): void {
  this.getEtudiant();
  this.getIsClose();


  
 
}

public getEtudiant(){
  let resp = this.service.getEtudiant("qsfds");
  resp.subscribe((data)=>this.etudiant=data);
 
}



public setEtudiant(){

  this.etudiant.incidents = null;
  this.etudiant.rendezVous = null;
  let resp = this.service.setEtudiant(this.etudiant);
  resp.subscribe((data)=>this.etudiant=data); 
 
}

public getIsClose(){
  let resp = this.service.getEtatAccueil();
  resp.subscribe((data)=>this.isClose=data);

  

}

public getNbCourrier(){
  //this.nbincident = this.getNbIncident();
 return this.etudiant.petiteEnveloppe + this.etudiant.grandeEnveloppe + this.etudiant.avisPassage + this.etudiant.colis;
 
}

public getNbIncident(){
  var val:any
  var count :number = 0;
  this.nbIncidents = this.etudiant.incidents;
 
  for(var i = 0; i < this.nbIncidents.length; ++i){
    if(this.nbIncidents[i].etat == 1){
      count++;
    }
 }

 return count;

}




}
