import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {
  userArray : any;
  userdetails : any;
  constructor( private authenticationService: AuthenticationService, private router: Router,private route: ActivatedRoute) { }
  ngOnInit() {
    debugger
    this.userArray = this.authenticationService.getprofileName()
    console.log(this.userArray);
    this.userdetails = this.userArray;
    // this.username1.push(this.userArray);
    // console.log("satish",this.username1);
  }

  logout(){
    //debugger;  
    this.authenticationService.logout();
  }



}
