import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, EmailValidator, MaxLengthValidator, MinLengthValidator } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  

  constructor(public fobj : FormBuilder) { }

  MarvellousForm = this.fobj.group(
    {
      firstname : ['',Validators.required,Validators.minLength(4)],
      lastname : ['',Validators.required],
      EmailId : ['',[Validators.required,Validators.email]],
      phone : ['', Validators.required],
      address : ['',Validators.required]
    }
  );

  Submit()
  {
    console.log("Button Pressed");
  }

  ngOnInit(): void {
  }

}
