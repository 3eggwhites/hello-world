import { TweetEventArgs } from './tweetlike/tweetlike.component';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  tweet = {
    body: "tweet body...",
    likesCount: 0,
    isLiked: false
  }

  onLikesChange(likeEventArgs: TweetEventArgs){
    this.tweet.isLiked = likeEventArgs.isActive;
    this.tweet.likesCount = likeEventArgs.likesCount;
    console.log(this.tweet);
  }

  /*onFavouriteChange(newObject: FavouriteChangedEventArgs){
    console.log('Favourite changed:', newObject);
  }*/
}
