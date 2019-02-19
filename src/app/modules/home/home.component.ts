import { Component, OnInit } from '@angular/core';
// import {HeaderNavigationComponent} from '../../main-layout/header-navigation/header-navigation.component'
import { ReadlocaldataService } from '../readlocaldata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jsonData: any;
  individualRecord: any;
  showIndividual: boolean;
  showallUsers: boolean;
  individualRecorddata: any;
  show1Property: boolean;
  show2Property: boolean;
  constructor(private readlocaldataservice : ReadlocaldataService) {}
  ngOnInit() {
    /*Fetching the JSON data from Service and storing in response*/
    this.readlocaldataservice.getlocalJSON()
    .subscribe(res => this.response(res));
  }
  

  
  response(data:any){
    //console.log(data);
    this.jsonData = data;
  }
 

  getUserdata(data:any){
  debugger;
  this.showIndividual=true;
  this.showallUsers=false;
  this.individualRecord = data;
  console.log(data);
  }
  
  getAllUsers(){
    debugger;
    this.showallUsers=true;
    this.showIndividual=false;
  }

  editUser(data:any){
    debugger;
  }
  deleteUser(data:any){
    debugger;
  }
 
/*Declared methods for show/hide the different templates*/
  show1(){
    this.show1Property= true;
    this.show2Property= false;
  }
  show2(){
    this.show2Property= true;
    this.show1Property= false;
  }



  // getlocalData():void{
  //   this.readlocaldataservice.getlocalData()
  //   .subscribe(
  //       listdata => {
  //       return this.readlocaldataservice = listdata;
  //     }
  //   );
  // }

}