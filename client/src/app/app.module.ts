import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AngularMaterialModule} from "./tools/modules/angular-material.module";
import {DownloaderComponent} from './home/downloader/downloader.component';
import {DownloaderService} from "./services/downloader.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DownloaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    NgbModule.forRoot()
  ],
  providers: [DownloaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
