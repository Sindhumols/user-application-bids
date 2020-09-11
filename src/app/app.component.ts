import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title="insta";

  ngOnInit(){
     // Your web app's Firebase configuration
     var firebaseConfig = {
      apiKey: "AIzaSyBtrk9C84oXHPAo8kq-vb-BvZIFR6IuxD8",
      authDomain: "pickbids1.firebaseapp.com",
      databaseURL: "https://pickbids1.firebaseio.com",
      projectId: "pickbids1",
      storageBucket: "pickbids1.appspot.com",
      messagingSenderId: "1025325091181",
      appId: "1:1025325091181:web:16deb7ba668c822e6e3264",
      measurementId: "G-112H3G963M"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
  }
}

