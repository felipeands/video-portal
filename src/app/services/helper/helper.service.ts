import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';

@Injectable()
export class HelperService {

  constructor() { }

  getPostHeaders() {
    let header: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return header;
  }

  obj2params(obj) {
    return Object.keys(obj).map((key) => {
      return `${key}=${obj[key]}`;
    }).join('&');
  }

}
