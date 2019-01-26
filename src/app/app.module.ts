import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { TweetlikeComponent } from './tweetlike/tweetlike.component';
import { ZippyComponent } from './zippy/zippy.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { HttpServiceConsumerComponent } from './http-service-consumer/http-service-consumer.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavouriteComponent,
    TweetlikeComponent,
    ZippyComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PasswordResetComponent,
    HttpServiceConsumerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
