import { Injectable } from "@angular/core";
//import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { SOURCES } from "./mock-sources";
import { Source } from "./source";

@Injectable({
  providedIn: "root"
})
export class SourceService {
  //private sourcesUrl = "localhost:8888/source"; // URL to web api
  sources = SOURCES;
  //constructor(private http: HttpClient) {}

  constructor() {}

  /** GET sourses data from the server */
  getSources(): Observable<Source[]> {
    return of(this.sources);
    //return this.http.get<Source[]>(this.sourcesUrl).pipe();
  }
}
