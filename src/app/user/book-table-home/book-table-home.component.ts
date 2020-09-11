import { OnInit } from '@angular/core';
import { Component, ElementRef, ViewContainerRef, AfterViewInit, ViewChild, ViewRef,TemplateRef} from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageData, DisplayConfig, SameSizeConfig, ImageEffect } from '@creativeacer/ngx-image-display';
import { expandAnimation } from './expand.ani';

enum hoverEffect {
zoom = 'zoom',
lighten = 'lighten',
}
@Component({
selector: 'app-book-table-home',
templateUrl: './book-table-home.component.html',
styleUrls: ['./book-table-home.component.scss'],
animations: [expandAnimation],
})
export class BookTableHomeComponent implements OnInit {
imagesub: Subscription;
images: Array<ImageData> = [];
samesizeConfig: SameSizeConfig;
displayconfig: DisplayConfig;
hovereffect: ImageEffect;
samesizeoption: boolean;
fullscreenoption: boolean;
hoverEffect: string = '';
show1=true;
[x:string]:any;
constructor() {
this.setImages();
this.samesizeoption = true;
this.displayconfig = {
containerwidth: '100%',

fullScreenView: false
// Set to true to see the top right full screen option
};
this.hovereffect = {
hoverEffectActive: true
};
}
storeName = 'Indigo Xp';
price = '1800 INR / person';
address = 'HSR Layout Sector-6';
opentime = 'Sunday to saturday 7:30am - 1:30 pm';
ngOnInit() {

}
setImages() {
this.images = [
{
type: 'url',
imageData: {
value: "http://localhost:4200/assets/images/menu1.jpg",
}
},
];
this.images2 = [
{
type: 'url',
imageData: {
value: "http://localhost:4200/assets/images/menu2.png",
}
},
];
this.imagesp = [
{
type: 'url',
imageData: {
value: "http://localhost:4200/assets/images/pub/Silent_Disco_in_Bielefeld@2x.png",
}
},
];
this.imagesp2 = [
{
type: 'url',
imageData: {
value: "http://localhost:4200/assets/images//merchantimages/lily_banse__YHSwy6uqvk_unsplas.png",
}
},
];
}

logImage(image){
alert('click on the image in the top of the right corner');

}
sameSizeimages(showSame){
this.samesizeoption = showSame;
}
hoverEffectFn(effect) {
let chosenEffect;
let effectActive;
switch (effect) {
case '':
chosenEffect = hoverEffect.zoom;
effectActive = false;
this.hoverEffect = '';
break;
case 'zoom':
chosenEffect = hoverEffect.zoom;
effectActive = true;
this.hoverEffect = 'zoom';
break;

}
this.hovereffect = {
hoverEffectActive: effectActive,
hoverEffect: chosenEffect,

};
this.samesizeoption = !this.samesizeoption;
}
}