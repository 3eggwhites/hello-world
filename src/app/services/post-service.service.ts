import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DataService } from "./data-service";

@Injectable({
  providedIn: "root"
})
export class PostServiceService extends DataService {
  constructor(httpClient: HttpClient) {
    super("http://jsonplaceholder.typicode.com/posts", httpClient);
  }
}
