import { AppError } from "./../common/error/app-error";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { NotFoundError } from "../common/error/not-found-error";
import { BadInputError } from "../common/error/bad-input-error";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get(this.url)
      .pipe(catchError(this.handleError));
  }

  create(resource) {
    return this.httpClient
      .post(this.url, JSON.stringify(resource))
      .pipe(catchError(this.handleError));
  }

  delete(postId) {
    postId = 4555;
    return this.httpClient
      .delete(this.url + "/" + postId)
      .pipe(catchError(this.handleError));
  }

  update(postId, data) {
    return this.httpClient
      .patch(this.url + "/" + postId, data)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }
    if (error.status === 400) {
      return throwError(new BadInputError());
    }
    return throwError(new AppError(error));
  }
}
