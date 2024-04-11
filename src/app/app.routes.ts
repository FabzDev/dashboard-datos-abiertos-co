import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component'),
    children: [
      {
        path: 'stations-map',
        title: 'Mapa de estaciones',
        loadComponent: () => import('./components/new-google-map/new-google-map.component'),
      },
      {
        path: 'consult-vehicle',
        title: 'Consultar Vehículo',
        loadComponent: () => import('./components/consult-vehicle/consult-vehicle.component'),
      },
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
      {
        path: "**",
        redirectTo: "stations-map"
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];
