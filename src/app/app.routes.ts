import { Routes } from '@angular/router';

// pages
import { VideosComponent } from './pages/videos/videos.component';
import { LoginComponent } from './pages/login/login.component';
import { PageVideoComponent } from './pages/video/video.component';

export const ROUTES: Routes = [
  { path: '', component: VideosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'video/:id', component: PageVideoComponent }
];
