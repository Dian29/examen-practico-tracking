import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
    },
    // Puedes agregar rutas comodín para manejar errores 404 si lo deseas:
    {
        path: '**',
        redirectTo: 'home'
    }
];
