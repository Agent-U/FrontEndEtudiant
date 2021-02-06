import { Component, OnInit } from '@angular/core';
import { RendezVous } from '../rendezVous';
import { RendezVousService } from '../serviceRendezVous/rendez-vous.service';
import { FormsModule } from '@angular/forms';
import { Etudiant } from 'src/etudiant';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  idEtudiantsActuel = '23';
  //etudianteConnec : any;
  etudiant = new Etudiant("23");
  listeRendezVous : any= [];
  listeAgent : any;
  selectRendezVous : RendezVous[] = [];
  selectedRendezVous : any;
  isSelectedRendezVous = false;

  selectAgent : any = "initselect";
  selectCreneau : any = "initCreanu"; 

  constructor(private service: RendezVousService) { }

  ngOnInit(): void {
    let resp = this.service.getRendezVous();
    resp.subscribe((data)=>this.listeRendezVous=data);

  //  let respEtu = this.service.getEtudiantWithId(this.idEtudiantsActuel);
   // respEtu.subscribe((data)=>this.etudianteConnec=data);
    

    let respAgent = this.service.getAgents();
    respAgent.subscribe((data)=>this.listeAgent=data);

    
  }

  afficheDisponibilite(agentId : any){
    this.selectRendezVous = [];
    for (let index = 0; index < this.listeRendezVous.length; index++) {
      if((this.listeRendezVous[index].agent.id == agentId)&&(this.listeRendezVous[index].disponible==true))
      this.selectRendezVous.push(this.listeRendezVous[index]);
      
    }

  }


  deleteRendezVous(rendezVousDelete : any){
    rendezVousDelete.etudiant = null;
    rendezVousDelete.disponible = true;
    this.service.editRendezVous(rendezVousDelete)
    .subscribe(() => {
      //this.listeRendezVous = this.listeRendezVous.filter((rendezVous: { id: number; })=> rendezVous.id != rendezVousDelete.id)
    });
    
  }

  changeRendezVous(rendezVous : any){
    this.selectedRendezVous = rendezVous;
    this.isSelectedRendezVous = true;
  }

  ajouterRendezVous(){

    if(this.isSelectedRendezVous){
      this.etudiant.ine = "23";
      this.selectedRendezVous.disponible = false;
 

      this.selectedRendezVous.etudiant = this.etudiant;
      this.service.addRendezVous(this.selectedRendezVous)
      .subscribe((rv) => {
        //this.listeRendezVous = [rv, ...this.listeRendezVous];
    })

    this.isSelectedRendezVous = false;

    this.selectAgent = "initselect";
    this.selectCreneau = "initCreanu";
    }
    
  
  }

}
