import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './angular-material-components/material-components-module';
import { SharedModule } from './modules/shared.module';
import { Sharingdatamodule } from './modules/sharingdata/sharingdata.module';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { HeaderNavigationComponent } from './main-layout/header-navigation/header-navigation.component';
import { FooterNavigationComponent } from './main-layout/footer-navigation/footer-navigation.component';
import { ReadlocaldataService } from './modules/readlocaldata.service';

// import { HomeComponent } from './modules/home/home.component';
// import { LoginComponent } from './modules/login/login.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    SharedModule,
    Sharingdatamodule
  ],
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    FooterNavigationComponent
    // HomeComponent,
    // LoginComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ReadlocaldataService,
    // provider used to create fake backend
    fakeBackendProvider
],
  bootstrap: [AppComponent]
})
export class AppModule { }
