import { Component, OnInit } from '@angular/core';
import { CourrierService } from '../serviceCourrier/courrier.service';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  courriers: any;
  datePC : Date = new Date();
  dateGC : Date = new Date();
  dateAP : Date = new Date();
  dateC : Date = new Date();
  constructor(private service:CourrierService) { }

  ngOnInit(): void {
    let resp = this.service.getCourriers("23");
    resp.subscribe((data)=>this.courriers=data);
    this.datePC = this.courriers.datePetiteEnveloppe;
    this.dateGC = this.courriers.dateGrandeEnveloppe;
    this.dateAP = this.courriers.dateAvisPassage;
    this.dateC = this.courriers.dateColis
    
  }

  

}
