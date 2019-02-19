import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newForm : FormGroup;
  constructor() { }

  ngOnInit() {

// Form Instance creation

    this.newForm = new FormGroup({
      email : new FormControl(),
      password : new FormControl(),
      address : new FormControl(),
      address2 : new FormControl(),
      cityname : new FormControl(),
      inputstate : new FormControl(),
      zipcode : new FormControl()

    })
  }
  newFormSubmit(){
    console.log(this.newForm);
    console.log(this.newForm.controls.password.touched);
    console.log(this.newForm.get('password').value);
  }

}
