import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-contact-us',
  templateUrl: './user-contact-us.component.html',
  styleUrls: ['./user-contact-us.component.scss']
})
export class UserContactUsComponent implements OnInit {

  contactForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  // Form Validator
  ngOnInit() {
  	this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      message: ['', Validators.required]
    })
  }
contantus = true;
faqs= false;
faq(){
  this.contantus = false;
  this.faqs = true;
}
back(){
  this.contantus = true;
  this.faqs = false;
}
}
