import { Component, OnInit } from "@angular/core";
import { PostServiceService } from "../services/post-service.service";

@Component({
  selector: "http-service-consumer",
  templateUrl: "./http-service-consumer.component.html",
  styleUrls: ["./http-service-consumer.component.css"]
})
export class HttpServiceConsumerComponent implements OnInit {
  private posts: any[];

  constructor(private postService: PostServiceService) {}

  ngOnInit() {
    this.postService.getPostsDataService().subscribe(
      response => {
        this.posts = response as any;
      },
      error => {
        console.log(error);
        alert("An unexpected error occurred.");
      }
    );
  }

  addPost(inputElement: HTMLInputElement) {
    let post = { body: inputElement.value };
    inputElement.value = "";
    this.postService.createPostService(post).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
        alert("An unexpected error occurred.");
      }
    );
    this.posts.splice(0, 0, post);
  }

  updatePost(post) {
    this.postService
      .updatePostService(post.id, JSON.stringify({ isRead: true }))
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
          alert("An unexpected error occurred.");
        }
      );
  }

  deletePost(post) {
    this.postService.deletePostService(post.id).subscribe(
      response => {
        console.log(response as Response);
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: Response) => {
        if (error.status === 404) {
          alert("This post has already been deleted");
        } else {
          console.log(error);
          alert("An unexpected error occurred.");
        }
      }
    );
  }
}
