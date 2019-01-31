import { map, switchMap } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { GithubDataService } from "./../services/github-data-service";
import { Component, OnInit } from "@angular/core";
import { combineLatest } from "rxjs";

@Component({
  selector: "github-follower",
  templateUrl: "./github-follower.component.html",
  styleUrls: ["./github-follower.component.css"]
})
export class GithubFollowerComponent implements OnInit {
  followers: any[];

  constructor(
    private dataService: GithubDataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    let obs = combineLatest([this.route.paramMap, this.route.queryParamMap]);
    obs
      .pipe(
        switchMap(combined => {
          console.log(combined);
          //let id = +combined[0].get("id");
          //let page = +combined[1].get("page");

          //this.dataService.getAll(id, page);
          return this.dataService.getAll();
        })
      )
      .subscribe(followers => {
        this.followers = followers as any;
      });
  }
}
