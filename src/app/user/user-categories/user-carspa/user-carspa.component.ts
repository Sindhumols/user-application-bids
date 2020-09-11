import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-carspa',
  templateUrl: './user-carspa.component.html',
  styleUrls: ['./user-carspa.component.scss']
})
export class UserCarspaComponent implements OnInit {
  cards = [];
  constructor() { }

  ngOnInit() {
    this.cards = [
      {
        id:1, title:'First 1',sub:'Win Exciting prizes every week', code:'FIRST1',date:'1 Jan 2019'
      }
    ]
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }

texas ='../../../../assets/images/users/texas.jpg';

john = '../../../../assets/images/users/johm.jpg';

}
