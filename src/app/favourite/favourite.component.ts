import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  encapsulation: ViewEncapsulation.Emulated 
})
export class FavouriteComponent {

  @Input('isFavourite') isFavourite: boolean;
  @Output('onChange') onTap = new EventEmitter();

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.onTap.emit({newValue: this.isFavourite});
  }

}

export interface FavouriteChangedEventArgs{
  newValue: boolean;
}
