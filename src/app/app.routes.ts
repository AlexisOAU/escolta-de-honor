import { Routes } from '@angular/router';
import { LandingLocalComponent } from './pages/landing-local/landing-local.component';

export const routes: Routes = [
  { path: '', component: LandingLocalComponent },
  { path: '**', redirectTo: '' },
];