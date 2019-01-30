import { GithubDataService } from "./services/github-data-service";
import { AppErrorHandler } from "./common/error/app-error-handler";
import { ErrorHandler } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CoursesComponent } from "./courses.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { FavouriteComponent } from "./favourite/favourite.component";
import { TweetlikeComponent } from "./tweetlike/tweetlike.component";
import { ZippyComponent } from "./zippy/zippy.component";
import { SignupFormComponent } from "./signup-form/signup-form.component";
import { NewCourseFormComponent } from "./new-course-form/new-course-form.component";
import { PasswordResetComponent } from "./password-reset/password-reset.component";
import { HttpServiceConsumerComponent } from "./http-service-consumer/http-service-consumer.component";
import { PostServiceService } from "./services/post-service.service";
import { GithubFollowerComponent } from "./github-follower/github-follower.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { GithubProfileComponent } from "./github-profile/github-profile.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RouterModule } from "@angular/router";

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
    HttpServiceConsumerComponent,
    GithubFollowerComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "followers/:id", component: GithubProfileComponent },
      { path: "followers", component: GithubFollowerComponent },
      { path: "posts", component: HttpServiceConsumerComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostServiceService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    GithubDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
