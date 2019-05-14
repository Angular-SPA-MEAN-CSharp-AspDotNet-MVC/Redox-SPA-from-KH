import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Source } from "./source";

@Injectable({
  providedIn: "root"
})
export class SourceService {
  private sourcesUrl = "http://localhost:8888/source"; // URL to web api

  constructor(private http: HttpClient) {}

  /** GET sourses data from the server */
  getSources(): Observable<Source[]> {
    return this.http.get<Source[]>(this.sourcesUrl).pipe();
  }
}
