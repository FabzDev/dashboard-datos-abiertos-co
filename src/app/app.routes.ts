import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'new-gas-stations',
    loadComponent: () => import('./components/new-google-map/new-google-map.component'),
  },
  {
    path: 'gas-stations',
    loadComponent: () => import('./components/google-map/google-map.component'),
  },
  {
    path: '',
    redirectTo: '/new-gas-stations',
    pathMatch: 'full'
  },
];
