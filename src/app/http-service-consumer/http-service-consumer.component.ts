import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

@Component({
  selector: "http-service-consumer",
  templateUrl: "./http-service-consumer.component.html",
  styleUrls: ["./http-service-consumer.component.css"]
})
export class HttpServiceConsumerComponent implements OnInit{
  private posts: any[];
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.getPostsData();
  }

  getPostsData() {
    this.httpClient.get(this.url).subscribe(response => {
      this.posts = response as any;
    });
  }

  addPost(inputElement: HTMLInputElement) {
    let post = { body: inputElement.value };
    inputElement.value = "";
    this.httpClient.post(this.url, post).subscribe(response => {
      console.log(response);
    });
    this.posts.splice(0, 0, post);
  }

  updatePost(post) {
    this.httpClient
      .patch(this.url + "/" + post.id, JSON.stringify({ isRead: true }))
      .subscribe(response => {
        console.log(response);
      });
  }

  deletePost(post) {
    this.httpClient.delete(this.url + "/" + post.id).subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }
}
