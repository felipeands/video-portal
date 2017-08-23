import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class HelperService {

  constructor() { }

  getPostHeaders() {
    const header: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return header;
  }

  obj2params(obj) {
    return Object.keys(obj).map((key) => {
      return `${key}=${obj[key]}`;
    }).join('&');
  }

  string2md5(string) {
    return Md5.hashStr(string);
  }

}
