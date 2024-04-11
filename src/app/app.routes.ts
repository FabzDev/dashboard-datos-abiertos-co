import { Routes } from '@angular/router';
import HomeComponent from './pages/home/home.component';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    children: [
      {
        path: 'stations-map',
        title: 'Mapa de estaciones',
        loadComponent: () => import('./components/google-map/google-map.component'),
      },
      // {
      //   path: 'consult-vehicle',
      //   title: 'Consultar Vehículo',
      //   loadComponent: () => import('./components/google-map/google-map.component'),
      // },
      // {
      //   path: 'production-agro',
      //   title: 'Producción Agricola',
      //   loadComponent: () => import('./components/google-map/google-map.component'),
      // },
      // {
      //   path: 'address-map',
      //   title: 'Formulario Dirección',
      //   loadComponent: () => import('./components/google-map/google-map.component'),
      // }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
