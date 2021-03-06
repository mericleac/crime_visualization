import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { DataComponent } from './data/data.component';
import { GraphComponent } from './graph/graph.component';
import { ReportComponent } from './report/report.component';
import { DataSearchComponent } from './data-search/data-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchComponent,
    DataComponent,
    GraphComponent,
    ReportComponent,
    DataSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
