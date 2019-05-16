import { Component, OnInit } from "@angular/core";
import { SOURCES } from "../mock-sources";
import { Source } from "../source";
import { SourceService } from "../source.service";

@Component({
  selector: "app-sources",
  templateUrl: "./sources.component.html",
  styleUrls: ["./sources.component.css"]
})
export class SourcesComponent implements OnInit {
  //sources = SOURCES;
  sources: Source[];
  selectedSource: Source;

  constructor(private sourceService: SourceService) {}

  ngOnInit() {
    this.getSources();
  }

  getSources(): void {
    this.sourceService
      .getSources()
      .subscribe(sources => (this.sources = sources));
    //this.sources = this.sourceService.getSources();
  }

  onSelect(oneSource: Source): void {
    this.selectedSource = oneSource;
  }
}
