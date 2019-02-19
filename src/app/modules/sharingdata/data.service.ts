import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({providedIn: 'root'})

export class DataService {
  
  private messageSource = new BehaviorSubject("I am from Data Service");
  currentMessge = this.messageSource.asObservable();
  data: any;
  show: boolean;
  status: any;
  constructor() {}

  changeMessage(message:any){
    this.messageSource.next(message);
  }

  newMessage(){
    this.data.changeMessage("Hello from Child");
    // this.show = true;
    // debugger
    // this.status.emit(this.show);
    return this.data;
  }
  
}
