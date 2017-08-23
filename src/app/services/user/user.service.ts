import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from './../../interfaces/user';
import { HelperService } from './../helper/helper.service';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private helperService: HelperService
  ) { }

  async isLoggedIn() {
    const user = await localStorage.getItem('user');
    return (user !== null) ? true : false;
  }

  async login(obj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      
      obj.password = Md5.hashStr(obj.password);
      const params = this.helperService.obj2params(obj);

      this.http.post(`http://localhost:3000/user/auth`, params, {
        headers: this.helperService.getPostHeaders()
      }).subscribe((res) => {
        const json = res.json();

        if (json.status === 'success') {
          resolve(json);
          this.setLoggedIn(json);
        } else {
          reject(json);
        }

      }, (err) => {
        reject(err);
      });
    });
  }

  setLoggedIn(user) {
    if (user.status) delete user.status;
    localStorage.setItem('user', JSON.stringify(user));
  }

}
