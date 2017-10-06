import { Component, OnInit } from '@angular/core';
import {DownloaderService} from "../../services/downloader.service";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})

export class DownloaderComponent implements OnInit {

  url: string;
  title: string;
  titleError: string = "";
  btnDownloadText: string = 'Download';
  videoImg: string = "../../../assets/img/default_video.png";
  showLoadingBar: boolean = false;

  formats = [
    {value: 'audio-mp3', viewValue: 'Mp3'},
    {value: 'audio-wav', viewValue: 'Wav'},
    {value: 'video-m4a', viewValue: 'M4a'},
    {value: 'video-mp4', viewValue: 'Mp4'},
    {value: 'video-avi', viewValue: 'Avi'}
  ];

  selectedFormat: string;

  constructor(private downloaderService: DownloaderService) {
  }

  ngOnInit() {

    this.selectedFormat = 'audio-mp3'
  }

  ngDownload() {

    if (this.btnDownloadText === 'Refresh') {
      this.refreshContent();
      return
    }

    if (this.url !== undefined && this.url !== "") {
      this.showLoadingBar = true;

      if (this.selectedFormat.indexOf('audio') != -1) {

        // Audio
        let format = this.selectedFormat.replace('audio-', '');

        this.downloaderService.Download2Audio({url: this.url, format: format})
          .subscribe((res: any) => {

            res = res.json();
            this.renderDownload(res)
          }, (err) => {
            console.log(err);
            this.showLoadingBar = false;
            this.titleError = "Error occured while trying to get this url";
          }, () => {
            this.showLoadingBar = false;
          })
      } else {

        // Video
        let format = this.selectedFormat.replace('video-', '');

        this.downloaderService.Download2Video({url: this.url, format: format})
          .subscribe((res: any) => {

            res = res.json();
            this.renderDownload(res)
          }, (err) => {
            console.log(err);
            this.showLoadingBar = false;
            this.titleError = "Error occured while trying to get this url";
          }, () => {
            this.showLoadingBar = false;
          })
      }
    }
  }

  refreshContent(){

    this.title = "";
    this.titleError = "";
    this.btnDownloadText = "Download";
    this.videoImg = "../../../assets/img/default_video.png";
  }

  renderDownload(res){

    this.title = res.info.fulltitle;
    this.videoImg = res.info.thumbnail;
    this.btnDownloadText = 'Refresh';
  }
}
