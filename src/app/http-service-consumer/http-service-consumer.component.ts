import { NotFoundError } from "./../common/error/not-found-error";
import { AppError } from "./../common/error/app-error";
import { Component, OnInit } from "@angular/core";
import { PostServiceService } from "../services/post-service.service";
import { BadInputError } from "../common/error/bad-input-error";

@Component({
  selector: "http-service-consumer",
  templateUrl: "./http-service-consumer.component.html",
  styleUrls: ["./http-service-consumer.component.css"]
})
export class HttpServiceConsumerComponent implements OnInit {
  private posts: any[];

  constructor(private postService: PostServiceService) {}

  ngOnInit() {
    this.postService.getAll().subscribe(posts => {
      this.posts = posts as any;
    });
  }

  addPost(inputElement: HTMLInputElement) {
    let post = { body: inputElement.value };
    inputElement.value = "";
    this.postService.create(post).subscribe(
      response => {
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          alert("Bad request");
        } else {
          throw error;
        }
      }
    );
    this.posts.splice(0, 0, post);
  }

  updatePost(post) {
    this.postService
      .update(post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.postService.delete(post.id).subscribe(
      response => {
        console.log(response as Response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("This post has already been deleted");
        } else {
          throw error;
        }
      }
    );
  }
}
