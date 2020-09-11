import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-offer',
  templateUrl: './user-offer.component.html',
  styleUrls: ['./user-offer.component.scss']
})
export class UserOfferComponent implements OnInit {
  [x: string]: any;
  constructor() { }

  ngOnInit() {
  }
  resturants ='../../../assets/images/merchantimages/pexels_photo_1640777_1@2x.png';
  pubs ='../../../assets/images/lee_blanchflower_1dW1vEJLlCQ_u.png';
  cowork ='../../../assets/images/Co-workingSpace/photo-1497215728101-856f4ea42174.jpg';
  fashion = '../../../assets/images/merchantimages/ID6245029cd507ac35cc0457373ecf.png';
  entertainment = '../../../assets/images/merchantimages/sunset_paris_las_vegas_tour_ei.png';
  cosmetics = '../../../assets/images/cosmetics/skincare-2357980_1280.jpg';
  game = '../../../assets/images/merchantimages/ID8_Ball_Feature.png';
  more ='../../../assets/images/furniture_731449_1920.png';
  public price = [{
    route:"/offer",
    img: "http://localhost:4200/assets/images/bigsale.jpg"
  }, {
    route:"/offer",
    img: "http://localhost:4200/assets/images/bigsale.jpg"
  },
  ]


  public offer = [{
    route: 'user/trends',
    img1: "http://localhost:4200/assets/images/images/megasale.jpg",
    type: 'Trending Offer',
  }, {
    route: 'user/best-deals',
    img1: "http://localhost:4200/assets/images/images/megasale.jpg",
    type: 'Best Deals',
  },
  {
    route: 'user/deal-near-you',
    img1: "http://localhost:4200/assets/images/images/megasale.jpg",
    type: 'Deals Near You',
  },
  ]

  public deal = [{
    img2: "http://localhost:4200/assets/images/images/flash.jpg"
  }, {
    img2: "http://localhost:4200/assets/images/images/flash.jpg"
  },
  {
    img2: "http://localhost:4200/assets/images/images/flash.jpg"
  },
  ]

  public deallove = [{
    img3: "http://localhost:4200/assets/images/images/dfu1.jpg"
  }, {
    img3: "http://localhost:4200/assets/images/images/dfu2.jpg"
  },
  {
    img3: "http://localhost:4200/assets/images/images/dfu3.jpg"
  },
  ]

  public pop = [{
    img4: "http://localhost:4200/assets/images/images/pop1.jpg"
  }, {
    img4: "http://localhost:4200/assets/images/images/pop1.jpg"
  },
  {
    img4: "http://localhost:4200/assets/images/images/pop1.jpg"
  },
  ]

  // Pricing Carousel Options
  public pricingCarousel: any = {
    loop: false,
    items: 2,
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
      767: {
        items: 2,
        nav: false,
        dots: true
      },
      992: {
        items: 2,
        nav: false,
        dots: true
      },
      1000: {
        items: 2,
        nav: true,
        dots: false
      }
    }
  }

  public offers: any = {
    loop: false,
    items: 3,
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
      767: {
        items: 3,
        nav: true,
        dots: false
      },
      992: {
        items: 3,
        nav: true,
        dots: false
      },
      1000: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  }

  public deals_of_day: any = {
    loop: false,
    items: 3,
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
      767: {
        items: 3,
        nav: true,
        dots: false
      },
      992: {
        items: 3,
        nav: true,
        dots: false
      },
      1000: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  }

  public deals_U_Love: any = {
    loop: false,
    items: 3,
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
      767: {
        items: 3,
        nav: true,
        dots: false
      },
      992: {
        items: 3,
        nav: true,
        dots: false
      },
      1000: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  }


  public popular: any = {
    loop: false,
    items: 3,
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
      767: {
        items: 3,
        nav: true,
        dots: false
      },
      992: {
        items: 3,
        nav: true,
        dots: false
      },
      1000: {
        items: 3,
        nav: true,
        dots: false
      }
    }
  }

}