import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Video } from './../../interfaces/video';
import { VideoService } from './../../services/video/video.service';

@Component({
  selector: 'page-app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class PageVideoComponent implements OnInit {

  public video: Video;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.getVideoById(params.id);
    })
  }

  getVideoById(id: string) {
    this.videoService.getVideoById(id).then((video: Video) => {
      this.video = video;
    })
  }

}
