import { Component, OnInit } from '@angular/core';
import {Event} from '../../model/event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: any;
  image_url:any;
  constructor(private service:EventService) { }

  ngOnInit(): void {
    let resp = this.service.getEvents();
    resp.subscribe((data)=>this.events=data);
   
  }

  public eventClicked(url:any){
    this.image_url = url;
  }

  
}
