import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from './../../interfaces/user';
import { HelperService } from './../helper/helper.service';
import { Config } from './../../app.config';

@Injectable()
export class UserService {

  constructor(
    private http: Http,
    private helperService: HelperService
  ) { }

  async getUser() {
    const data = await localStorage.getItem('user');
    return (data) ? JSON.parse(data) : null;
  }

  async isLoggedIn() {
    const user = await this.getUser();
    return (user !== null) ? true : false;
  }

  async login(obj: any): Promise<any> {
    return new Promise((resolve, reject) => {

      obj.password = this.helperService.string2md5(obj.password);
      const params = this.helperService.obj2params(obj);

      this.http.post(`${Config.api_auth}`, params, {
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

  async setLoggedIn(user) {
    if (user.status) { delete user.status; }
    return await localStorage.setItem('user', JSON.stringify(user));
  }

  async logout(): Promise<any> {
    return new Promise((resolve) => {
      localStorage.removeItem('user');
      resolve();
    })
  }

}
