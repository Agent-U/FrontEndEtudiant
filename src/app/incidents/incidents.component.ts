import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEncapsulation } from '@angular/core';
import { IncidentsService } from '../serviceIncidents/incidents.service';
import {Incident} from '../../model/incident';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  uploadForm: any ; 
  etudiant: any;
  constructor(private service: IncidentsService, private modalService: NgbModal, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let resp = this.service.getIncidents();
    resp.subscribe((data)=>this.incidents=data);
    
    let respEtu = this.service.getEtudiantWithId("23");
    respEtu.subscribe((data)=>this.etudiant=data);

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
   
  }
  
  public ajouterIncident(){
    
    
   const formData = new FormData();
   formData.append('file', this.uploadForm.get('profile').value);
    
   this.incident1.etudiant = this.etudiant ;
   this.incident1.etudiant.incidents = null;
   this.incident1.etudiant.rendezVous = null;
   this.incident1.imageUrl =  this.uploadForm.get('profile').value.name;
   
   this.service.addIncident(this.incident1)
   .subscribe((inc) => {
     this.incidents = [inc, ...this.incidents];
 });
   this.service.upPic(formData).subscribe()


  this.resteIncident();

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
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('profile').setValue(file);
    }
  }


  openXl(content : any, incident : any) {
    this.modalService.open(content, { size: 'xl',  centered: true });

   this.incidentModel = incident;
    
  }

}
