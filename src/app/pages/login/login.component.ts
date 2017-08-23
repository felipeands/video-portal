import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from './../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isSubmited: boolean;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() { }

  onSubmit(form) {
    this.isSubmited = true;

    if (form.valid) {

      this.userService.login(form.value).then((res) => {
        this.router.navigate(['']);
      }, (err) => {

      });

    }

  }

}
