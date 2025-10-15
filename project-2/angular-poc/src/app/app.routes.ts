// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { AddAssetComponent } from './pages/add-asset/add-asset.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'assets', component: AssetsComponent },
  { path: 'add-asset', component: AddAssetComponent },
  { path: '**', redirectTo: '' },
];
