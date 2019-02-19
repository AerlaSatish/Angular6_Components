import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import {DataService} from '../../sharingdata/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string;
  show = false;
  @Output () status = new EventEmitter();
  constructor(private data:DataService) {}

  ngOnInit() {
    this.data.currentMessge.subscribe(message => this.message = message)
  }

  getMessage(){
    this.data.newMessage();
    debugger;
  }
}
