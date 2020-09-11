import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
selector: 'app-conform-table',
templateUrl: './conform-table.component.html',
styleUrls: ['./conform-table.component.scss']
})
export class ConformTableComponent implements OnInit {
// [x:string]:any;
 // done(){
    // }
storeName = 'Indigo Xp';
price = '1800 INR / person';
address = 'HSR Layout Sector-6';
opentime = 'Sunday to saturday 7:30am -1:30 pm';
// constructor() { }

// ngOnInit() {
// }
[x:string]:any;
// done(){

// }
constructor( private router: Router, private route: ActivatedRoute) {
    this.route.snapshot.paramMap.get('day');
    this.route.snapshot.paramMap.get('noofguest'); 
    console.log(this.route.snapshot.paramMap.get('day'));
    console.log(this.route.snapshot.paramMap.get('noofguest'));

 }

ngOnInit() {
    this.day =this.route.snapshot.paramMap.get('day');
    this.noofguest =this.route.snapshot.paramMap.get('noofguest');
}

}