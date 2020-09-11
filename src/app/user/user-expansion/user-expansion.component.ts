import { Component, OnInit } from '@angular/core';
import { expandAnimation } from './expand.ani';

@Component({
  selector: 'app-user-expansion',
  templateUrl: './user-expansion.component.html',
  styleUrls: ['./user-expansion.component.scss'],
  animations: [expandAnimation],
})
export class UserExpansionComponent implements OnInit {
  [x:string]:any;
  show5=true;
  constructor() { }

  ngOnInit() {
  }
  //--------------videos-------------------
  public video11 = [{
    link:"user/videos",
    head:"A2B Resturant BTM,Banglore",
    icon:"more_vert",
     video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
    },{
      link:"user/videos",
      head:"A2B Resturant BTM,Banglore",
      icon:"more_vert",
       video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
      },
      {
        link:"user/videos",
        head:"A2B Resturant BTM,Banglore",
        icon:"more_vert",
         video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
        },
        {
          link:"user/videos",
          head:"A2B Resturant BTM,Banglore",
          icon:"more_vert",
           video1:"https://mdbootstrap.com/img/video/Sail-Away.mp4"
          },
     ]
//-------------------Live videos-----------------------------
public livevideo11 = [{
  route:"user/livevideo",
  img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
  head1:"A2B Resturant BTM,Banglore",
   livevideo1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
   live:"Live",
  },{
    route:"user/livevideo",
    img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
    head1:"A2B Resturant BTM,Banglore",
    livevideo1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
    live:"Live",
    },
    {
      route:"user/livevideo",
      img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
      head1:"A2B Resturant BTM,Banglore",
      livevideo1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
      live:"Live",
      },
      {
        route:"user/livevideo",
        img:"http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
        head1:"A2B Resturant BTM,Banglore",
        livevideo1:"https://mdbootstrap.com/img/video/Sail-Away.mp4",
        live:"Live",
        },
   ]
   /*-----------------------blog---------------------*/
   public blog11 = [{
     route1: 'user/blogpage',
   img11:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
    blog:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
    },
    {
      img11:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
       blog:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
       },
       {
        img11:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
         blog:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
         },
         {
          img11:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
           blog:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
           },
     ]

     public newsfeed11 = [{
      route2: 'user/newpage',
      img12:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
       blog1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
       },{
         img12:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
          blog1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
          },
          {
           img12:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
            blog1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
            },
            {
             img12:"http://localhost:4200/assets/images/pub/aaron_sebastian_XWl8Pu3HrgY_un.png",
              blog1:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.enim veniam, quidem rep"
              },
        ]

      // Pricing Carousel Options
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
          items:3,
          nav:false,
          dots:true
      },
      1000:{
          items:3,
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

  public livevideoCarousel: any = {
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
          items:3,
          nav:false,
          dots:true
      },
      1000:{
          items:3,
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

  public blogCarousel: any = {
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
          items:3,
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

  public newsfeedCarousel: any = {
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
          items:3,
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
