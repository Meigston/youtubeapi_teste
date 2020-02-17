import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { YoutubeDto } from '../../infra/models/youtube-dto';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos: YoutubeDto[];
  searchValue = '';
  idTimeout: any;
  urlPlay: any;
  scrollPage = 0;
  showModal = false;
  heightFilter = 100;

  constructor(
    private youTubeService: YoutubeService,
    private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }
  onkeyup() {

    if (this.idTimeout) {
      clearTimeout(this.idTimeout);
    }

    if (this.searchValue.length >= 2) {
      this.idTimeout = setTimeout(() => { this.serachVideos(this.searchValue); }, 500);
    }
  }
  onClickSearch() {
    if (this.searchValue) {
      this.serachVideos(this.searchValue);
    }
  }

  onPlay(videoId: string) {
    this.scrollPage = window.scrollY + 50;
    this.heightFilter = window.innerHeight;
    this.showModal = true;

    if (this.scrollPage <= 100) {
      this.scrollPage = 120;
    }
    this.urlPlay = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${videoId}`);
  }

  onClose() {
    this.urlPlay = null;
    this.showModal = false;
  }

  private serachVideos(search: string) {
    this.youTubeService.search(search).subscribe(data => {
      this.videos = data.items;
    });
  }
}
