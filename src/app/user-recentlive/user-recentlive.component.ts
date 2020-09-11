import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-recentlive',
  templateUrl: './user-recentlive.component.html',
  styleUrls: ['./user-recentlive.component.scss']
})
export class UserRecentliveComponent implements OnInit {

  cards = [];
  [x:string]:any;
  constructor() { }

  ngOnInit() {
    this.cards = [
      {
        id:1, name:'First 1',sub:'Win Exciting prizes every week', code:'FIRST1',date:'1 Jan 2019'
      }
    ]
  }
  copyInputMessage(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  public video11 = [{
    head1:"Recent Lives",
    img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
    head:"A2B Resturant BTM,Banglore",
    link:"user/livevideo",
     video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
     live:"live"
    },{
      head1:"          ",
      img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
      head:"A2B Resturant BTM,Banglore",
      link:"user/livevideo",
       video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
       live:"live"
      },
      {
        head1:"          ",
        img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
        head:"A2B Resturant BTM,Banglore",
        link:"user/livevideo",
         video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
         live:"live"
        },
        {
          head1:"          ",
          img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
          head:"A2B Resturant BTM,Banglore",
          link:"user/livevideo",    
           video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
           live:"live"
          },
     ]

     public video1Carousel: any = {
      loop: false,
      items: 4,
      margin: 15,
      navClass: ['owl-prev', 'owl-next'],
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
          dots: true
        },
        600: {
          items: 2,
          nav: false,
          dots: true
        },
        900:{
            items:2,
            nav:false,
            dots:true
        },
        1000:{
            items:2,
            nav:false,
            dots:true
        },
        1200:{
            items:4,
            nav:true,
            dots:false               
        }
      }
    }
}
