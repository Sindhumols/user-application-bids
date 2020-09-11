import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-medical',
  templateUrl: './user-medical.component.html',
  styleUrls: ['./user-medical.component.scss']
})
export class UserMedicalComponent implements OnInit {
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
  fav_before= true;
  fav_after = false;
  fav_before1= true;
  fav_after1 = false;
  fav_before2= true;
  fav_after2= false;
  fav_before3= true;
  fav_after3 = false;
  fav_before4= true;
  fav_after4 = false;
  fav_before5= true;
  fav_after5 = false;
  fav_before6= true;
  fav_after6 = false;
  fav_before7= true;
  fav_after7 = false;
  fav_before8= true;
  fav_after8 = false;
  fav_before9= true;
  fav_after9 = false;
  fav_before10= true;
  fav_after10 = false;  
  fav_before11= true;
  fav_after11 = false;
  fav_before12= true;
  fav_after12 = false;

  fav(){
    this.fav_before = false;
    this.fav_after = true;
  }
  fav2(){
    this.fav_before1 = false;
    this.fav_after1 = true;
  }
  fav4(){
    this.fav_before2 = false;
    this.fav_after2 = true;
  } 
  fav6(){
    this.fav_before3 = false;
    this.fav_after3 = true;
  }
  fav8(){
    this.fav_before4 = false;
    this.fav_after4 = true;
  }
  fav10(){
    this.fav_before5 = false;
    this.fav_after5 = true;
  }
  fav12(){
    this.fav_before6 = false;
    this.fav_after6 = true;
  }

  fav14(){
    this.fav_before7 = false;
    this.fav_after7 = true;
  } 
  fav16(){
    this.fav_before8 = false;
    this.fav_after8 = true;
  }

  fav18(){
    this.fav_before9 = false;
    this.fav_after9 = true;
  } 
  fav20(){
    this.fav_before10 = false;
    this.fav_after10 = true;
  }
  fav22(){
    this.fav_before11 = false;
    this.fav_after11 = true;
  }
  fav24(){
    this.fav_before12 = false;
    this.fav_after12 = true;
  }
  fav1(){
    this.fav_before= true;
    this.fav_after = false;
  }
  fav3(){
    this.fav_before1= true;
    this.fav_after1 = false;
  }
  fav5(){
    this.fav_before2= true;
    this.fav_after2 = false;
  }
  fav7(){
    this.fav_before3= true;
    this.fav_after3 = false;
  }
  fav9(){
    this.fav_before4= true;
    this.fav_after4 = false;
  }
  fav11(){
    this.fav_before5= true;
    this.fav_after5 = false;
  }
  fav13(){
    this.fav_before6= true;
    this.fav_after6 = false;
  }
  fav15(){
    this.fav_before7= true;
    this.fav_after7 = false;
  }
  fav17(){
    this.fav_before8= true;
    this.fav_after8 = false;
  }
  fav19(){
    this.fav_before9= true;
    this.fav_after9 = false;
  }
  fav21(){
    this.fav_before10= true;
    this.fav_after10 = false;
  }
  fav23(){
    this.fav_before11= true;
    this.fav_after11 = false;
  }
  fav25(){
    this.fav_before12= true;
    this.fav_after12 = false;
  }


texas ='../../../../assets/images/users/texas.jpg';

john = '../../../../assets/images/users/johm.jpg';

}
