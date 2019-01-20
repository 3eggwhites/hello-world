import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tweetlike',
  templateUrl: './tweetlike.component.html',
  styleUrls: ['./tweetlike.component.css']
})
export class TweetlikeComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Output('change') change = new EventEmitter();

  onChange(){
    this.isActive = !this.isActive;
    this.likesCount = (this.likesCount != 0) ? 0 : 1;
    this.change.emit({isActive: this.isActive, likesCount: this.likesCount})
  }
}

export interface TweetEventArgs{
  isActive: boolean;
  likesCount: number;
}

