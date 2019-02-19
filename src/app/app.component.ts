import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import {Subscription} from 'rxjs';
export let browserRefresh = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subscription: Subscription;
  headerFooter: boolean;
  constructor(private router:Router){
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.hideheaderBeforeLogin(event);
        browserRefresh = !this.router.navigated;
      }
    });
  }

  /*Method to hide header before login*/
  private hideheaderBeforeLogin(event: NavigationStart) {
    this.headerFooter = (event.url !== '/login');
  }
}
  