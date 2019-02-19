import { Component, OnInit} from '@angular/core';
import {DataService} from '../../sharingdata/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Teachers: { name: string; subject: string; }[];
  message:string;
  constructor(private data : DataService) { }
  
  ngOnInit() {
    this.Teachers = [
      {name: 'Mr. Deep',subject:'Angular 6 in DotNet Techy YouTube Channel'},
      {name: 'Mr. Gautam' ,subject:'C#, WEB API in DotNet Techy YouTube Channel'},
      {name: 'Mr. DotNet Techy' ,subject:'High chart, chart js, prime ng, ag grid in DotNet Techy YouTube Channel '}
    ];

     this.data.currentMessge.subscribe(message => this.message = message)
  
  }
  displayStatus(status : any){
    debugger;
    console.log(status);
  }
}
