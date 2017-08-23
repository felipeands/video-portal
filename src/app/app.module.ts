import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ROUTES } from './app.routes';

// app
import { AppComponent } from './app.component';

// services
import { UserService } from './services/user/user.service';
import { VideoService } from './services/video/video.service';
import { HelperService } from './services/helper/helper.service';

// pages
import { LoginComponent } from './pages/login/login.component';
import { PageVideoComponent } from './pages/video/video.component';
import { HomeComponent } from './pages/home/home.component';

// components
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageVideoComponent,
    HomeComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UserService, VideoService, HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
