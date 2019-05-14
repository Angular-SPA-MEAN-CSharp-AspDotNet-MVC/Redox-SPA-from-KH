import { Component, OnInit } from "@angular/core";
import { SOURCES } from "../mock-sources";
import { Source } from "webpack-sources";

@Component({
  selector: "app-sources",
  templateUrl: "./sources.component.html",
  styleUrls: ["./sources.component.css"]
})
export class SourcesComponent implements OnInit {
  sources = SOURCES;
  selectedSource: Source;

  constructor() {}

  ngOnInit() {}

  onSelect(oneSource: Source): void {
    this.selectedSource = oneSource;
  }
}
