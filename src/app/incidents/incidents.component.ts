import { Component, OnInit } from '@angular/core';
import { IncidentsService } from '../serviceIncidents/incidents.service';
import {Incident} from '../incident';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incident1 : Incident = new Incident(0,"","test Incident","",0,"","");
  incidents : any;
  messageAdd:any;
  localUrl: any;

  etudiant: any;
  constructor(private service: IncidentsService) { }

  ngOnInit(): void {
    let resp = this.service.getIncidents();
    resp.subscribe((data)=>this.incidents=data);
    let respEtu = this.service.getEtudiantWithId(1);
    respEtu.subscribe((data)=>this.etudiant=data);
   
  }
  
  public ajouterIncident(){
    
    console.log(this.incident1);
    

    this.incident1.images = this.localUrl;
    this.incident1.etudiant = this.etudiant;
    let resp = this.service.addIncident(this.incident1);
    resp.subscribe((data)=>this.messageAdd=data);
  }

  
  
  showPreviewImage(event: any) {
      if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
              this.localUrl = event.target.result;
          }
          reader.readAsDataURL(event.target.files[0]);
      }
  }

}
