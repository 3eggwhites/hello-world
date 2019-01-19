import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  @Input('isFavourite') isFavourite: boolean;
  @Output('onChange') onTap = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isFavourite = !this.isFavourite;
    this.onTap.emit({newValue: this.isFavourite});
  }

}

export interface FavouriteChangedEventArgs{
  newValue: boolean;
}
