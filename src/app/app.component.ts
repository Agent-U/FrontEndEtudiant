import { Component, OnInit } from '@angular/core';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FrontEndEtudiant';

etudiant: any;
 constructor(private service:AppServiceService) { }

 ngOnInit(): void {
  let resp = this.service.getEtudiant("1");
  resp.subscribe((data)=>this.etudiant=data);

 
}

}
