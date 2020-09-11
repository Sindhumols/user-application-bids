import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { OwlModule } from 'ngx-owl-carousel';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss']
})

@NgModule({
  imports: [
    OwlModule
  ]
})
export class UserMainComponent implements OnInit {
  logo = './assets/images/logo.png';
  [x:string]:any;
   constructor(private _sanitizer: DomSanitizer) { }
   ngOnInit() {

   }
   
   public price = [{
     type: 'Platinum',
     price: '999',
     feature: this._sanitizer.bypassSecurityTrustHtml('<li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li><liLorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li>'),
 
   }, {
     type: 'Gold',
     price: '599',
     feature: this._sanitizer.bypassSecurityTrustHtml('<li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li>'),
 
   },
   {
     type: 'Silver',
     price: '399',
     feature: this._sanitizer.bypassSecurityTrustHtml('<li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li>'),
 
   },
   {
     type: 'Bronze',
     price: '299',
     feature: this._sanitizer.bypassSecurityTrustHtml('<li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li><li>Lorem Ipsum is simply dummy text</li>'),
 
   }
   ]
   // Pricing Carousel Options
   public pricingCarousel: any = {
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
       767: {
         items: 2,
         nav: false,
         dots: true
       },
       892: {
         items: 3,
         nav: false,
         dots: true
       },
       1000: {
         items: 4,
         nav: true,
         dots: false
       },
 
     }
   }
  //  public merchandSlider: any = {
  //    loop: true,
  //    items: 1,
  //    margin: 15,
  //    navClass: ['owl-prev', 'owl-next'],
  //    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
  //    nav: true,
  //    dots: true,
  //    autoplay: true,
  //    autoplayTimeout: 2000,
  //    autoplayHoverPause: true,
  //    responsive:{
  //      0:{
  //          items:1,
  //          nav:false,
  //          dots:true
  //      },
  //  }
  //  }
}

