import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetlikeComponent } from './tweetlike.component';

describe('TweetlikeComponent', () => {
  let component: TweetlikeComponent;
  let fixture: ComponentFixture<TweetlikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetlikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
