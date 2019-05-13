import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SingleSourceComponent } from "./single-source/single-source.component";
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [AppComponent, SingleSourceComponent, SourcesComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
