import { Component, OnInit } from '@angular/core';
import { CourrierService } from '../serviceCourrier/courrier.service';

@Component({
  selector: 'app-courrier',
  templateUrl: './courrier.component.html',
  styleUrls: ['./courrier.component.css']
})
export class CourrierComponent implements OnInit {
  courriers: any;

  constructor(private service:CourrierService) { }

  ngOnInit(): void {
    let resp = this.service.getCourriers("qsfds");
    resp.subscribe((data)=>this.courriers=data);
   
  }

  

}
