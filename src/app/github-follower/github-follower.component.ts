import { GithubDataService } from "./../services/github-data-service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "github-follower",
  templateUrl: "./github-follower.component.html",
  styleUrls: ["./github-follower.component.css"]
})
export class GithubFollowerComponent implements OnInit {
  followers: any[];

  constructor(private dataService: GithubDataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe(response => {
      this.followers = response as any;
    });
  }
}
