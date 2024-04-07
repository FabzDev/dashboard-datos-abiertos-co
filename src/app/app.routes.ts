import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'gas-stations',
    loadComponent: () => import('./components/google-map/google-map.component'),
  },
  {
    path: '',
    redirectTo: '/gas-stations',
    pathMatch: 'full'
  },
];
