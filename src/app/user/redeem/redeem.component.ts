import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.component.html',
  styleUrls: ['./redeem.component.scss']
})
export class RedeemComponent implements OnInit {
  [x: string]: any;
  constructor() {
    this.Confirming = "Confirming";
    setTimeout(() => {
      this.done = "done";
      this.Confirming = "Congratulations";
      this.save = "You Have Saved 570 INR";
    }, 4000);
  }
  storeName = 'Indigo Xp';
  price = '1800 INR / person';
  address = 'HSR Layout Sector-6';
  opentime = 'Sunday to saturday 7:30-1:30 pm';
  ngOnInit() {
  }

}