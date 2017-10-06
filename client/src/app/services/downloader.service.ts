import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DownloaderService {

  constructor(private http: Http) {  }

  // Form
  Download2Audio(obj: object){
    return this.http.post('/api/controllers/download-to-audio/', obj);
  }

  Download2Video(obj: object){
    return this.http.post('/api/controllers/download-to-video/', obj);
  }

}
