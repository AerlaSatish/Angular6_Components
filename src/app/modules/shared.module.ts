// import { ModalComponent } from './components/modal/modal.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';
import { AppMaterialModule } from '../angular-material-components/material-components-module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReadlocaldataService } from './readlocaldata.service';
import { AppComponent } from '../app.component';
import { ParentComponent } from './sharingdata/parent/parent.component';
import { ChildComponent } from './sharingdata/child/child.component';
import { FormsComponent } from './forms/forms.component';


export function HttpLoaderFactory(http: HttpClient) {
 
}


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    PagenotfoundComponent,
    ParentComponent,
    ChildComponent,
    FormsComponent
  ],
  providers:[
    ReadlocaldataService
  ],
  bootstrap: [AppComponent],
  exports: [
    
  ],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA],
})

export class SharedModule {}
