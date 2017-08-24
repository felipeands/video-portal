import { Injectable, EventEmitter, Output } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Video } from './../../interfaces/video';
import { UserService } from './../user/user.service';
import { HelperService } from './../helper/helper.service';
import { Config } from './../../app.config';

@Injectable()
export class VideoService {

  @Output() playVideo: EventEmitter<Video> = new EventEmitter();

  constructor(
    private http: Http,
    private userService: UserService,
    private helperService: HelperService
  ) { }

  getVideos(perPage: number, offset: number): Promise<any> {
    return new Promise((resolve, reject) => {

      this.userService.getUser().then((user) => {

        const obj = {
          sessionId: user.sessionId,
          skip: offset,
          limit: perPage
        }

        const params = this.helperService.obj2params(obj);

        this.http.get(`${Config.api_videos}?${params}`, ).subscribe((res) => {
          const json = res.json();
          resolve(json.data);
        }, (err) => {
          reject(err);
        });

      })
    })
  }

  onPlayVideo(video: Video) {
    this.playVideo.emit(video);
  }

  getPlayVideo() {
    return this.playVideo;
  }

}
