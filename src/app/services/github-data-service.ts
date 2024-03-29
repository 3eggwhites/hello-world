import { HttpClient } from "@angular/common/http";
import { DataService } from "./data-service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GithubDataService extends DataService {
  constructor(httpClient: HttpClient) {
    super("https://api.github.com/users/mosh-hamedani/followers", httpClient);
  }
}
