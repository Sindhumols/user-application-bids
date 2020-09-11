import { UserFashionsComponent } from './user/user-fashions/user-fashions.component';
import { UserBlogPageComponent } from './user/user-blog-page/user-blog-page.component';
import { UserRecentBlogComponent } from './user/user-recent-blog/user-recent-blog.component';
import { DealspageComponent } from './user/dealspage/dealspage.component';
import { UserGrociesComponent } from './user/user-grocies/user-grocies.component';
import { UserToyComponent } from './user/user-categories/user-toy/user-toy.component';
import { UserTourComponent } from './user/user-categories/user-tour/user-tour.component';
import { UserStationaryComponent } from './user/user-categories/user-stationary/user-stationary.component';
import { UserSpaComponent } from './user/user-categories/user-spa/user-spa.component';
import { UserResturantsComponent } from './user/user-categories/user-resturants/user-resturants.component';
import { UserResortsComponent } from './user/user-categories/user-resorts/user-resorts.component';
import { UserPubsComponent } from './user/user-categories/user-pubs/user-pubs.component';
import { UserParkComponent } from './user/user-categories/user-park/user-park.component';
import { UserOpticalComponent } from './user/user-categories/user-optical/user-optical.component';
import { UserMedicalComponent } from './user/user-categories/user-medical/user-medical.component';
import { UserJewelleryComponent } from './user/user-categories/user-jewellery/user-jewellery.component';
import { UserHomedecorComponent } from './user/user-categories/user-homedecor/user-homedecor.component';
import { UserGymComponent } from './user/user-categories/user-gym/user-gym.component';
import { UserGiftComponent } from './user/user-categories/user-gift/user-gift.component';
import { UserGameComponent } from './user/user-categories/user-game/user-game.component';
import { UserFootwearComponent } from './user/user-categories/user-footwear/user-footwear.component';
import { UserEntertainmentComponent } from './user/user-categories/user-entertainment/user-entertainment.component';
import { UserElectricalsComponent } from './user/user-categories/user-electricals/user-electricals.component';
import { UserCowrkComponent } from './user/user-categories/user-cowrk/user-cowrk.component';
import { UserCosmeticsComponent } from './user/user-categories/user-cosmetics/user-cosmetics.component';
import { UserCoachingComponent } from './user/user-categories/user-coaching/user-coaching.component';
import { UserCarspaComponent } from './user/user-categories/user-carspa/user-carspa.component';
import { UserMoviesComponent } from './user/user-movies/user-movies.component';
import { UserGroceriesComponent } from './user/user-categories/user-groceries/user-groceries.component';
import { UserFoodsComponent } from './user/user-foods/user-foods.component';
import { UserFashionComponent } from './user/user-categories/user-fashion/user-fashion.component';
import { UserDealsYouLoveComponent } from './user/user-deals-you-love/user-deals-you-love.component';
import { UserDealsOfTheDayComponent } from './user/user-deals-of-the-day/user-deals-of-the-day.component';
import { UserCouponsComponent } from './user/user-coupons/user-coupons.component';
import { UserCategoriesComponent } from './user/user-categories/user-categories.component';
import { UserBooktableComponent } from './user/user-booktable/user-booktable.component';
import { UserOfferComponent } from './user/user-offer/user-offer.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserExpansionComponent } from './user/user-expansion/user-expansion.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { RedeemComponent } from './user/redeem/redeem.component';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { OwlModule } from 'ngx-owl-carousel';
import * as $ from 'jquery';
// import { ToastrModule } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BookTableHomeComponent } from './user/book-table-home/book-table-home.component';
import { UserSubscriptionComponent } from './user/user-subscription/user-subscription.component';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { ConformTableComponent } from './user/conform-table/conform-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserVideoComponent } from './user-video/user-video.component';
import { UserLivevideoComponent } from './user-livevideo/user-livevideo.component';
import { UserRecentliveComponent } from './user-recentlive/user-recentlive.component';
import { EmailsendComponent } from './user/emailsend/emailsend.component';
import { UserRecentNewsComponent } from './user/user-recent-news/user-recent-news.component';
import { UserNewsPageComponent } from './user/user-news-page/user-news-page.component';
import { UserRecentlyuploadComponent } from './user/user-recentlyupload/user-recentlyupload.component';
import { UserPopularBrandsComponent } from './user/user-popular-brands/user-popular-brands.component';
import { UserPaymentComponent } from './user/user-payment/user-payment.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxImageDisplayModule } from '@creativeacer/ngx-image-display';
import { HeaderMainComponent } from './user/header-main/header-main.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserContactUsComponent } from './user/user-contact-us/user-contact-us.component';
import { UserFaqsComponent } from './user/user-faqs/user-faqs.component';
import { UserTermsConditionComponent } from './user/user-terms-condition/user-terms-condition.component';
import { UserPrivacyPolicyComponent } from './user/user-privacy-policy/user-privacy-policy.component';

@NgModule({
  declarations: [
    RedeemComponent,
    AppComponent,
    BookTableHomeComponent,
    UserSubscriptionComponent,
    ContactInfoComponent,
    ConformTableComponent,
    UserMainComponent,
    UserExpansionComponent,
    UserProfileComponent,
    UserOfferComponent,
    UserBooktableComponent,
    UserCouponsComponent,
    UserDealsOfTheDayComponent,
    UserDealsYouLoveComponent,
    UserFashionComponent,
    UserFoodsComponent,
    UserGroceriesComponent,
    UserMoviesComponent,
    UserCarspaComponent,
    UserCoachingComponent,
    UserCosmeticsComponent,
    UserCowrkComponent,
    UserElectricalsComponent,
    UserEntertainmentComponent,
    UserFashionComponent,
    UserFootwearComponent,
    UserGameComponent,
    UserGiftComponent,
    UserGroceriesComponent,
    UserGymComponent,
    UserHomedecorComponent,
    UserJewelleryComponent,
    UserMedicalComponent,
    UserOpticalComponent,
    UserParkComponent,
    UserPubsComponent,
    UserResortsComponent,
    UserResturantsComponent,
    UserSpaComponent,
    UserStationaryComponent,
    UserTourComponent,
    UserToyComponent,
    UserCategoriesComponent,
    UserGrociesComponent,
    UserVideoComponent,
    UserLivevideoComponent,
    UserRecentliveComponent,
    EmailsendComponent,
    DealspageComponent,
    UserRecentBlogComponent,
    UserBlogPageComponent,
    UserCouponsComponent,
    UserDealsOfTheDayComponent,
    UserDealsYouLoveComponent,
    UserFashionComponent,
    UserFoodsComponent,
    UserGrociesComponent,
    UserMoviesComponent,
    UserRecentBlogComponent,
    UserRecentNewsComponent,
    UserBlogPageComponent,
    UserNewsPageComponent,
    UserRecentlyuploadComponent,
    UserPopularBrandsComponent,
	UserPaymentComponent,
	HeaderMainComponent,
  UserFashionsComponent,
  UserFooterComponent,
  UserContactUsComponent,
  UserFaqsComponent,
  UserTermsConditionComponent,
  UserPrivacyPolicyComponent
  ],
  imports: [
   NgxImageDisplayModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpModule, HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
     OwlModule,NgxImageDisplayModule,NgxMaterialTimepickerModule,
    // ToastrModule.forRoot(),
    ToastrModule.forRoot(),
    RouterModule.forRoot(rootRouterConfig, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
