import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { TweetlikeComponent } from './tweetlike/tweetlike.component';
import { ZippyComponent } from './zippy/zippy.component';
import { SignupFormComponent } from './signup-form/signup-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavouriteComponent,
    TweetlikeComponent,
    ZippyComponent,
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
