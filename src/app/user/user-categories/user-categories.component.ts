import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-categories',
  templateUrl: './user-categories.component.html',
  styleUrls: ['./user-categories.component.scss']
})
export class UserCategoriesComponent implements OnInit {
  cards = [];
  constructor() { }
resturants ='../../../assets/components/restorants.png';
pubs ='../../../assets/components/pubs.png';
carspa ='../../../assets/components/CarSpa.png';
medical='../../../assets/components/medicals.png';
footwear = '../../../assets/components/footwear.png';
groceries = '../../../assets/components/Grocery.png';
gym = '../../../assets/components/gym.png';
fashion = '../../../assets/components/Fashions.png';
coaching = '../../../assets/components/Coaching.png';
tour = '../../../assets/components/tour.png';
park = '../../../assets/components/AmusmentParks.png';
gift ='../../../assets/components/Giftcenter.png';
entertainment = '../../../assets/components/Enetertinement.png';
stationary = '../../../assets/components/Stationary.png';
cosmetics = '../../../assets/components/cosmetics.png';
game = '../../../assets/components/Games.png';
electricals = '../../../assets/components/Electricals.png';
toy = '../../../assets/components/kidsToys.png';
cowrk = '../../../assets/components/Cowrks.png';
resorts = '../../../assets/components/Resorts.png';
optical = '../../../assets/components/Opticals.png';
homedecor = '../../../assets/components/homedecore.png';
jewellery = '../../../assets/components/jwllry.png';
spa = '../../../assets/components/spa.png';
resort = '../../../assets/components/Resorts.png';
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
}
