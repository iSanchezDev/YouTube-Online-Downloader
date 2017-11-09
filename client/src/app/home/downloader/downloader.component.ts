import { Component, OnInit } from '@angular/core';
import { DownloaderService } from '../../services/downloader.service';
import { formatsModel } from '../../models/downloader-class.models'
import { saveAs } from 'file-saver';

const defaultThumbnails = '../../../assets/img/default_thumbnails.png';

@Component({
  selector: 'app-downloader',
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})

export class DownloaderComponent implements OnInit {

  // Booleans
  showLoadingBar: boolean = false;

  // Strings
  url: string;
  downloadTitle: string = 'Type your url and download';
  selectedFormat: string = 'audio-mp3';
  btnDownloadText: string = 'Download';
  thumbnails = defaultThumbnails;

  // Models
  selector = new formatsModel;

  constructor(private downloaderService: DownloaderService) {

  }

  ngOnInit() {
  }

  ngDownload() {

    if ((this.url !== undefined || this.url !== '') && this.btnDownloadText === 'Download') {

      this.showLoadingBar = true;
      this.btnDownloadText = 'Downloading...';
      let audioDownload = this.selectedFormat.indexOf('audio') != -1;

      if (audioDownload) {
        this.getAudioFromURL()
      } else {
        this.getVideoFromURL()
      }
    } else {

      this.refreshContent()
    }
  }

  getFormat(format: string){

    return format.replace(/(\w+)(-)/, '');
  }

  getAudioFromURL(){

    let format = this.getFormat(this.selectedFormat);

    this.downloaderService.Download2Audio({url: this.url, format: format})
      .subscribe((res: any) => {

        res = res.json();
        this.renderDownloadObject(res)
      }, (err) => {
        console.log(err);
        this.downloadTitle = 'Error while trying to get this url';
      }, () => {
        this.showLoadingBar = false;
      })
  }

  getVideoFromURL(){

    this.downloadTitle = '';
    let format = this.getFormat(this.selectedFormat);

    this.downloaderService.Download2Video({url: this.url, format: format})
      .subscribe((res: any) => {

        res = res.json();
        this.renderDownloadObject(res)
      }, (err) => {
        console.log(err);
        this.downloadTitle = 'Error while trying to get this url';
      }, () => {
        this.showLoadingBar = false;
      })
  }

  renderDownloadObject(res){

    this.btnDownloadText = 'Refresh';
    this.downloadTitle = res.info.fulltitle;
    this.thumbnails = res.info.thumbnail;
  }

  refreshContent(){

    this.downloadTitle = 'Type your url and download';
    this.btnDownloadText = 'Download';
    this.thumbnails = defaultThumbnails;
  }
}
