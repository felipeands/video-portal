import { Component, OnInit } from '@angular/core';

import { VideoService } from './../../services/video/video.service';
import { Config } from './../../app.config';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  private perPage: number;
  private offset: number;

  constructor(
    private videoService: VideoService
  ) { 
    this.perPage = Config.videosPerPage;
    this.offset = 0;
  }

  ngOnInit() {
    this.videoService.getVideos(this.perPage, this.offset).then((videos) => {

    })
  }

}
