import { FavouriteChangedEventArgs } from './favourite/favourite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
  post = {
    title: "Title",
    isFavourite: true
  }

  onFavouriteChange(newObject: FavouriteChangedEventArgs){
    console.log('Favourite changed:', newObject);
  }
}
