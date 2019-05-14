import { Component, OnInit, Input } from "@angular/core";
import { Source } from "../source";

@Component({
  selector: "app-single-source",
  templateUrl: "./single-source.component.html",
  styleUrls: ["./single-source.component.css"]
})
export class SingleSourceComponent implements OnInit {
  /*
  source: Source = {
    id: "4e7cb748-9d37-4705-9d16-bd68a80afc39",
    name: "Chicago University Health System",
    environment: "production",
    encoding: "latin1",
    created_at: "2019-03-05 21:04:27",
    updated_at: "2019-03-05 21:04:27"
    //,deleted_at: null
  };
  */

  @Input() oneSource: Source;

  constructor() {}

  ngOnInit() {}
}
