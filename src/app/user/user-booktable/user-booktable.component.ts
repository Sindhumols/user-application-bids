import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactInfoComponent } from './../contact-info/contact-info.component';
import { Component, OnInit, } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-user-booktable',
  templateUrl: './user-booktable.component.html',
  styleUrls: ['./user-booktable.component.scss'],
})
export class UserBooktableComponent implements OnInit {
  // // userDetails:Array<object>;
  // [x: string]: any;
  // registerForm: FormGroup;
  // today: number = Date.now();
  // newEmployeeClicked = true;
  // constructor(private formBuilder: FormBuilder, private router: Router) {
  //   this.registerForm = this.formBuilder.group({
  //     date: ['', Validators.required],
  //     day: ['', Validators.required],
  //     noofguest: ['', [Validators.required,]],

  //   });
  // }
  // ngOnInit() {

  // }
  // booktable: any;
  // onSubmit() {
  //   var a = this.registerForm.value.date;
  //   var format = 'dd/MM/yyyy';
  //   // var b= a | date : 'short'
  //   console.log(this.registerForm.value.date);
  //   console.log(this.registerForm.value.day);
  //   console.log(this.registerForm.value.noofguest);
  //   this.router.navigate(['/contactinfo', { date: '12/09/2021', day: '5:30pm', noofguest: '7' }]);
  //   // this.submitted = true;
  //   this.registerForm.reset()
  // }
  // // get f() { return this.registerForm.controls; }

  constructor(private formBuilder: FormBuilder, private router: Router, ) {
    this.registerForm = this.formBuilder.group({
      date: ['', Validators.required],
      day: ['', Validators.required],
      noofguest: ['', Validators.required],

    });
  }
  ngOnInit() {}
  storeName = 'Indigo Xp';
price = '1800 INR / person';
address = 'HSR Layout Sector-6';
opentime = 'Sunday to saturday 7:30am - 1:30 pm';
  booktable: any;
  onSubmit() {
    var date = this.registerForm.value.date;
    var day = this.registerForm.value.day;
    var guest = this.registerForm.value.noofguest;
    this.router.navigate(['/contactinfo', { date: date, day: day, noofguest: guest }]);
    // this.submitted = true;
    this.registerForm.reset();
  }
  [x: string]: any;
  registerForm: FormGroup;
  today: number = Date.now();
  newEmployeeClicked = true;
    // get f() { return this.registerForm.controls; }
}