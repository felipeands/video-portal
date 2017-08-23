import { Routes } from '@angular/router';

// pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageVideoComponent } from './pages/video/video.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'video/:id', component: PageVideoComponent }
];
