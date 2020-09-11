import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dealspage',
  templateUrl: './dealspage.component.html',
  styleUrls: ['./dealspage.component.scss']
})
export class DealspageComponent implements OnInit {
 
  constructor() { }
  value = 'FIRST';
  beautysale = '../../../assets/images/users/dealspage/70sale.jpg';
  pizzasale = '../../../assets/images/users/dealspage/pizza.jpg';
  weekendsale ='../../../assets/images/users/dealspage/bigsale.jpg';
  bigsale = '../../../assets/images/users/dealspage/weekend2.jpg';
  sale = '../../../assets/images/users/dealspage/sale.png';
  websale ='../../assets/images/users/dealspage/beauty.jpg';
  packsale = '../../../assets/images/users/dealspage/final.jpg';
  avengers = []; 
  cards = [];
ngOnInit() { 

this.avengers = 
[{ id: 1, naming: 'In Store', name:'Fashion', name1:'Gift & Party Stores', name2:'Kid Stores', name3:'Electronics & Accessories', name4:'Home & Appliances', num:'4',num1:'4', num2:'4', num3:'4', num4:'4' }, 
]; 

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

}
