import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Video } from './../../interfaces/video';
import { VideoService } from './../../services/video/video.service';
import { Config } from './../../app.config';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @Input() video: Video;
  @Input() preview: boolean;
  @Input() autoplay: boolean;

  @ViewChild('videoTag') elVideo: ElementRef;

  public apiUrl = Config.api;
  public rating: number;

  constructor(
    private router: Router,
    private videoService: VideoService
  ) {
    this.rating = 0;
  }

  ngOnInit() {
    this.videoService.getPlayVideo().subscribe((video: Video) => {
      if (video !== this.video) {
        this.elVideo.nativeElement.pause();
      }
    });
    setTimeout(() => {
      this.rating = this.getRating();
    }, 100);
  }

  onPlay() {
    this.videoService.onPlayVideo(this.video);
  }

  onOpen() {
    this.router.navigate(['/video', this.video._id]);
  }

  getRating(): number {
    if (!this.video) { return; }
    const total = this.video.ratings.reduce((total, num) => {
      return total + num;
    });
    const rating = total / this.video.ratings.length;
    return Math.ceil(rating);
  }

  isActiveStar(star: number): boolean {
    return (this.rating >= star);
  }

}
