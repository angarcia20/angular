import { Component, OnInit } from '@angular/core';
import {Tweet} from '../models/tweet.model'

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
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
  adicionartweet(){
    this.listaTweets.push(this.nuevotweet);
    this.nuevotweet = new Tweet;
  }

  ngOnInit(): void {
  }



}
