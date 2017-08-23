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
  public errorMessage: string;

  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit() { }

  onSubmit(form) {
    this.isSubmited = true;
    this.errorMessage = null;

    if (form.valid) {

      this.userService.login(form.value).then((res) => {
        this.router.navigate(['']);
      }, (err) => {
        this.isSubmited = false;
        if (err.status && err.status === 'error') { this.errorMessage = err.error; }
      });

    }

  }

}
