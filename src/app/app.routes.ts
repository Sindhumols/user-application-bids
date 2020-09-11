import { UserPrivacyPolicyComponent } from './user/user-privacy-policy/user-privacy-policy.component';
import { UserTermsConditionComponent } from './user/user-terms-condition/user-terms-condition.component';
import { UserFaqsComponent } from './user/user-faqs/user-faqs.component';
import { UserPaymentComponent } from './user/user-payment/user-payment.component';
import { UserRecentliveComponent } from './user-recentlive/user-recentlive.component';
import { UserPopularBrandsComponent } from './user/user-popular-brands/user-popular-brands.component';
import { UserRecentlyuploadComponent } from './user/user-recentlyupload/user-recentlyupload.component';
import { UserCouponsComponent } from './user/user-coupons/user-coupons.component';
import { UserCategoriesComponent } from './user/user-categories/user-categories.component';
import { UserVideoComponent } from './user-video/user-video.component';
import { UserBooktableComponent } from './user/user-booktable/user-booktable.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserExpansionComponent } from './user/user-expansion/user-expansion.component';
import { UserOfferComponent } from './user/user-offer/user-offer.component';
import { UserMainComponent } from './user/user-main/user-main.component';
import { UserSubscriptionComponent } from './user/user-subscription/user-subscription.component';
import { ContactInfoComponent } from './user/contact-info/contact-info.component';
import { ConformTableComponent } from './user/conform-table/conform-table.component';
import { BookTableHomeComponent } from './user/book-table-home/book-table-home.component';
import { RedeemComponent } from './user/redeem/redeem.component';
import { EmailsendComponent } from './user/emailsend/emailsend.component';
import { UserLivevideoComponent } from './user-livevideo/user-livevideo.component';
import { UserResturantsComponent } from './user/user-categories/user-resturants/user-resturants.component';
import { UserPubsComponent } from './user/user-categories/user-pubs/user-pubs.component';
import { UserCarspaComponent } from './user/user-categories/user-carspa/user-carspa.component';
import { UserMedicalComponent } from './user/user-categories/user-medical/user-medical.component';
import { UserGroceriesComponent } from './user/user-categories/user-groceries/user-groceries.component';
import { UserGymComponent } from './user/user-categories/user-gym/user-gym.component';
import { UserFashionComponent } from './user/user-categories/user-fashion/user-fashion.component';
import { UserCoachingComponent } from './user/user-categories/user-coaching/user-coaching.component';
import { UserParkComponent } from './user/user-categories/user-park/user-park.component';
import { UserGiftComponent } from './user/user-categories/user-gift/user-gift.component';
import { UserGameComponent } from './user/user-categories/user-game/user-game.component';
import { UserElectricalsComponent } from './user/user-categories/user-electricals/user-electricals.component';
import { UserOpticalComponent } from './user/user-categories/user-optical/user-optical.component';
import { UserHomedecorComponent } from './user/user-categories/user-homedecor/user-homedecor.component';
import { UserFootwearComponent } from './user/user-categories/user-footwear/user-footwear.component';
import { DealspageComponent } from './user/dealspage/dealspage.component';
import { UserDealsOfTheDayComponent } from './user/user-deals-of-the-day/user-deals-of-the-day.component';
import { UserRecentBlogComponent } from './user/user-recent-blog/user-recent-blog.component';
import { Routes } from '@angular/router';
import { UserBlogPageComponent } from './user/user-blog-page/user-blog-page.component';
import { UserRecentNewsComponent } from './user/user-recent-news/user-recent-news.component';
import { UserNewsPageComponent } from './user/user-news-page/user-news-page.component';
import { UserCowrkComponent } from './user/user-categories/user-cowrk/user-cowrk.component';
import { UserEntertainmentComponent } from './user/user-categories/user-entertainment/user-entertainment.component';
import { UserStationaryComponent } from './user/user-categories/user-stationary/user-stationary.component';
import { UserToyComponent } from './user/user-categories/user-toy/user-toy.component';
import { UserSpaComponent } from './user/user-categories/user-spa/user-spa.component';
import { UserJewelleryComponent } from './user/user-categories/user-jewellery/user-jewellery.component';
import { UserTourComponent } from './user/user-categories/user-tour/user-tour.component';
import { UserCosmeticsComponent } from './user/user-categories/user-cosmetics/user-cosmetics.component';
import { UserDealsYouLoveComponent } from './user/user-deals-you-love/user-deals-you-love.component';

export const rootRouterConfig: Routes = [
{
  path:'offer',component:BookTableHomeComponent
},
{
  path:'conformtable',component:ConformTableComponent
},
{
  path:'contactinfo',component:ContactInfoComponent
},
 {
    path:'payment',component:UserPaymentComponent
    },
{
  path:'remeed',component:RedeemComponent
},
{
  path:'subscription',component:UserSubscriptionComponent
},
{
  path:'user/main',component:UserMainComponent
},
{
  path:'user/offer',component:UserOfferComponent
},
{
  path:'user/expansion',component:UserExpansionComponent
},
{
  path:'user/profile',component: UserProfileComponent
},
{
  path:'booktable',component: UserBooktableComponent
},
{
  path:'user/expansion',component:UserExpansionComponent
},
{
  path:'user/offer',component: UserOfferComponent
},
{
  path:'user/videos',component: UserVideoComponent
},
{
  path:'user/recent-videos',component: UserRecentlyuploadComponent
},
{
  path:'user/email',component: EmailsendComponent
},
{
  path:'user/livevideo',component: UserLivevideoComponent
},
{
  path:'user/recent-livevideo',component: UserRecentliveComponent
},
{
  path: 'user/categories',component:UserCategoriesComponent
},
{
  path:'user/resturants', component:UserResturantsComponent
},
{
  path:'user/pubs', component:UserPubsComponent
},
{
  path:'user/carspa', component:UserCarspaComponent
},
{
  path:'user/medical', component:UserMedicalComponent
},
{
  path:'user/groceries', component:UserGroceriesComponent
},
{
  path:'user/gym', component:UserGymComponent
},
{
  path:'user/fashion', component:UserFashionComponent
},
{
  path:'user/coaching', component:UserCoachingComponent
},
{
  path:'user/park', component:UserParkComponent
},
{
  path:'user/gift', component:UserGiftComponent
},
{
  path:'user/entertainment', component:UserEntertainmentComponent
},
{
  path:'user/stationary', component:UserStationaryComponent
},
{
  path:'user/game', component:UserGameComponent
},
{
  path:'user/electricals', component:UserElectricalsComponent
},
{
  path:'user/toy', component:UserToyComponent
},
{
  path:'user/cowrk', component:UserCowrkComponent
},
{
  path:'user/optical', component:UserOpticalComponent
},
{
  path:'user/home_decors', component:UserHomedecorComponent
},
{
  path:'user/spa', component:UserSpaComponent
},
{
  path:'user/jewellery', component:UserJewelleryComponent
},
{
  path:'user/footer', component:UserFootwearComponent
},
{
  path:'user/tour', component:UserTourComponent
},
{
  path:'user/cosmetics', component:UserCosmeticsComponent
},
{
  path:'user/resorts', component:UserOpticalComponent
},
{
path:'user/trends', component: DealspageComponent
},
{
path: 'user/deal-near-you', component: DealspageComponent
},
{
path:'user/best-deals', component: DealspageComponent
},
{
path:'user/dealsoftheday', component: UserDealsOfTheDayComponent
},
{
path:'user/dealsyoulove', component: UserDealsYouLoveComponent
},
{
path:'user/blog', component: UserBlogPageComponent
},
{
path: 'user/news', component: UserNewsPageComponent
},
{
  path: 'user/coupons', component: UserCouponsComponent
},
{
  path: 'user/newspage', component: UserRecentNewsComponent
},
{
  path: 'user/blogpage', component: UserRecentBlogComponent
},
{
  path: 'user/popularbrands', component: UserPopularBrandsComponent
},
{
  path: 'user/terms-conditions', component: UserTermsConditionComponent
},
{
  path: 'user/privacy-policy', component: UserPrivacyPolicyComponent
},
{ 
  path: '', 
  redirectTo: 'user/main', 
  pathMatch: 'full' 
},
{ 
  path: '**', 
  redirectTo: 'user/main'
}
];

