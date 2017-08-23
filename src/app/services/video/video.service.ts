import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Video } from './../../interfaces/video';

@Injectable()
export class VideoService {

  constructor(
    private http: Http
  ) { }

  getVideos(perPage: number, offset: number): Promise<any> {
    return new Promise((resolve, reject) => {

      

      resolve('');

    })
  }

}
