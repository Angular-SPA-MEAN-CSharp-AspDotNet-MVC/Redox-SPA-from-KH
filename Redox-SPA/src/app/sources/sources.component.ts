import { Component, OnInit } from "@angular/core";
import { SOURCES } from "../mock-sources";

@Component({
  selector: "app-sources",
  templateUrl: "./sources.component.html",
  styleUrls: ["./sources.component.css"]
})
export class SourcesComponent implements OnInit {
  sources = SOURCES;

  constructor() {}

  ngOnInit() {}
}
