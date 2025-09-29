import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'next-page',
    loadComponent: () =>
      import('./components/splash-screen/splash-screen.component').then(
        m => m.SplashScreenComponent
      ),
  },
  // Nouvelle route pour le composant de connexion
  {
    path: 'connexion', // L'URL que vous utiliserez pour accéder à cette page
    loadComponent: () =>
      import('./components/connexion/connexion.component').then(
        m => m.ConnexionComponent // Assurez-vous que le nom de la classe est 'ConnexionComponent'
      ),
  },
  {
    path: 'connexion1', // L'URL que vous utiliserez pour accéder à cette page
    loadComponent: () =>
      import('./components/connexion1/connexion1.component').then(
        m => m.Connexion1Component // Assurez-vous que le nom de la classe est 'ConnexionComponent'
      ),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];