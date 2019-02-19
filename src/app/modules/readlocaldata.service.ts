import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ReadlocaldataService {

  constructor(public httpService:HttpClient) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  // getdata(){
  //   return this.httpService.get('local.json');
  // }

  getlocalJSON() {
    return this.httpService.get('./assets/local.json');
  }

  getEmpdata(){
    return this.httpService.get('./assets/emp.json');
  }
}