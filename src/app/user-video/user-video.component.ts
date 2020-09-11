import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-video',
  templateUrl: './user-video.component.html',
  styleUrls: ['./user-video.component.scss']
})
export class UserVideoComponent implements OnInit {
  cards = [];
  news = [];
  constructor() { }
  new_post ='./../../../assets/images/users/newpost.jpg';
  ngOnInit() {
    this.cards = [
      {
        id:1, title:'First 1',sub:'Win Exciting prizes every week', code:'FIRST1',date:'1 Jan 2019'
      }
    ];

    this.news = [
      {
        id:1, heading:`what is ispum`,content:`Lorem ipsum dolor sit amet consectetur adipisicing elit.`, more:`more...`,
      }
    ]
  }
copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}
user_video = 'https://mdbootstrap.com/img/video/Sail-Away.mp4';
  public video11 = [{
    link:"user/videos",
    head:"Video Is Uploaded By A2B Resturant BTM,Banglore",
    icon:"more_vert",
     video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
    },{
      link:"user/videos",
      head:"Video Is Uploaded By A2B Resturant BTM,Banglore",
      icon:"more_vert",
       video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
      },
      {
        link:"user/videos",
        head:"Video Is Uploaded By A2B Resturant BTM,Banglore",
        icon:"more_vert",
         video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
        },
     ]

     public video1Carousel: any = {
      loop: false,
      items: 4,
      margin: 20,
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
            items:3,
            nav:true,
            dots:false               
        }
      }
    }
}
