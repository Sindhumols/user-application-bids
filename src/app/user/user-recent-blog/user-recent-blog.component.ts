import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-recent-blog',
  templateUrl: './user-recent-blog.component.html',
  styleUrls: ['./user-recent-blog.component.scss']
})
export class UserRecentBlogComponent implements OnInit {
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
        id:1, heading:`what is ispum`,content:`Lorem ipsum dolor sit amet
         consectetur adipisicing elit.`, more:`more...`,
      }
    ]
  }
copyInputMessage(inputElement){
  inputElement.select();
  document.execCommand('copy');
  inputElement.setSelectionRange(0, 0);
}

}
