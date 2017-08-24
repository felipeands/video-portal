import { Component, OnInit, HostListener } from '@angular/core';

import { Video } from './../../interfaces/video';
import { VideoService } from './../../services/video/video.service';
import { Config } from './../../app.config';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  @HostListener("window:scroll", ["$event"]) onScroll() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.loadMore();
    }
  }

  private perPage: number;
  private offset: number;
  public videos: Video[];

  constructor(
    private videoService: VideoService
  ) {
    this.perPage = Config.videosPerPage;
    this.offset = 0;
    this.videos = [];
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.videoService.getVideos(this.perPage, this.offset).then((videos: Video[]) => {
      this.videos = this.videos.concat(videos);
    });
  }

  loadMore() {
    this.offset += this.perPage;
    this.getVideos();
  }

}
