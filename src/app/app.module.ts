import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { ROUTES } from './routes';

// app
import { AppComponent } from './app.component';

// services
import { UserService } from './services/user/user.service';
import { VideoService } from './services/video/video.service';

// pages
import { LoginComponent } from './pages/login/login.component';
import { VideoComponent } from './pages/video/video.component';
import { HomeComponent } from './pages/home/home.component';

// components

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VideoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService, VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
