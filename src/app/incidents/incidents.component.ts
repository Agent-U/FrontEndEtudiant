import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';
import { IncidentsService } from '../serviceIncidents/incidents.service';
import {Incident} from '../incident';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IncidentsComponent implements OnInit {

  incident1 : Incident = new Incident(0,"","test Incident","",0,"","","");
  incidentModel : Incident = new Incident(0,"","test Incident","",0,"","","");;
  incidents : any;
  messageAdd:any;
  localUrl: any;

  etudiant: any;
  constructor(private service: IncidentsService, private modalService: NgbModal) { }

  ngOnInit(): void {
    let resp = this.service.getIncidents();
    resp.subscribe((data)=>this.incidents=data);
    
    let respEtu = this.service.getEtudiantWithId("1");
    respEtu.subscribe((data)=>this.etudiant=data);
   
  }
  
  public ajouterIncident(){
    
    
    

    this.incident1.images = this.localUrl;
    
    //alert(this.incident1.motif);
    this.incident1.etudiant = this.etudiant ;
    this.incident1.etudiant.incidents = null;
    this.incident1.etudiant.rendezVous = null;
    
    this.service.addIncident(this.incident1)
    .subscribe((inc) => {
      this.incidents = [inc, ...this.incidents];
  })
  this.resteIncident();
  
    //resp.subscribe((data)=>this.messageAdd=data);
   // alert(this.messageAdd);
  }
  
  resteIncident(){
    this.incident1 = new Incident(0,"","","",0,"","","");
  }

  public supprimerIncident(id:number){

    this.service.deleteIncident(id)
    .subscribe(() => {
      this.incidents = this.incidents.filter((incident: { id: number; })=> incident.id != id)
    });
   // resp.subscribe((data)=>this.messageAdd=data);
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


  openXl(content : any, incident : any) {
    this.modalService.open(content, { size: 'xl',  centered: true });

   this.incidentModel = incident;
    
  }

}
