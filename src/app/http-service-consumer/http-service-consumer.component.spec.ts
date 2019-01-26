import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpServiceConsumerComponent } from './http-service-consumer.component';

describe('HttpServiceConsumerComponent', () => {
  let component: HttpServiceConsumerComponent;
  let fixture: ComponentFixture<HttpServiceConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpServiceConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpServiceConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
