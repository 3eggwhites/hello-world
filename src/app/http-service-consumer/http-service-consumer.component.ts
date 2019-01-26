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
    this.postService.getPostsDataService().subscribe(response => {
      this.posts = response as any;
    });
  }

  addPost(inputElement: HTMLInputElement) {
    let post = { body: inputElement.value };
    inputElement.value = "";
    this.postService.createPostService(post).subscribe(response => {
      console.log(response);
    });
    this.posts.splice(0, 0, post);
  }

  updatePost(post) {
    this.postService
      .updatePostService(post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.postService.deletePostService(post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
