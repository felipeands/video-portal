import { Injectable } from '@angular/core';

import { User } from './../../interfaces/user';

@Injectable()
export class UserService {

  constructor() { }

  async isLoggedIn(): Promise<boolean> {
    const user = await localStorage.getItem('user');
    return (user !== null) ? true : false;
  }

}
