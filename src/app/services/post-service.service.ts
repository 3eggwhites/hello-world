import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PostServiceService {
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {}

  getPostsDataService() {
    return this.httpClient.get(this.url);
  }

  createPostService(post) {
    return this.httpClient.post(this.url, JSON.stringify(post));
  }

  deletePostService(postId) {
    return this.httpClient.delete(this.url + "/" + postId);
  }

  updatePostService(postId, data) {
    return this.httpClient.patch(this.url + "/" + postId, data);
  }
}
