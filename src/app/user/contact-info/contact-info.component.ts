import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    console.log("in contact info page");
    this.route.snapshot.paramMap.get('date');
    this.route.snapshot.paramMap.get('day');
    this.route.snapshot.paramMap.get('noofguest');
  }
  ngOnInit() {
    this.date = this.route.snapshot.paramMap.get('date');
    this.day = this.route.snapshot.paramMap.get('day');
    this.noofguest = this.route.snapshot.paramMap.get('noofguest');
    this.registerForm = this.formBuilder.group({
      Name: ['', Validators.required],
      number: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    }, {
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  storeName = 'Indigo Xp';
  price = '1800 INR / person';
  address = 'HSR Layout Sector-6';
  opentime = 'Sunday to saturday 7:30am - 1:30 pm';
  log(x) {
    console.log(x);
  }
  submit(val) {
    // console.log(val);
    var day = this.day;
    var guest = this.noofguest;
    console.log(day);
    console.log(guest);
    this.router.navigate(['/conformtable', { day: this.day, noofguest: this.noofguest }]);
  }
  [x: string]: any;
  show = true;
  registerForm: FormGroup;
  submitted = false;
}