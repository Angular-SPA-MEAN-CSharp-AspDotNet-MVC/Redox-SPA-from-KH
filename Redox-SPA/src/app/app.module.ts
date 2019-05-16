import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { SingleSourceComponent } from "./single-source/single-source.component";
import { SourcesComponent } from "./sources/sources.component";

@NgModule({
  declarations: [AppComponent, SingleSourceComponent, SourcesComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
