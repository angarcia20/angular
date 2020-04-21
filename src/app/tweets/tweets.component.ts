import { Component, OnInit } from '@angular/core';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  listaTweets = [];
  nuevotweet : Tweet;
  constructor() { 
      this.nuevotweet={
      id: this.listaTweets.length,
      texto: "",
      autor : "",
      fecha : ""
    }


    console.log("LISTA ", this.listaTweets);


  }

  ngOnInit(): void {
  }

}
