import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'association/:id',
    loadComponent: () =>
      import('./pages/association/association.page').then((m) => m.AssociationPage),
  },
  {
    path: 'profil-enfant/:id',
    loadComponent: () =>
      import('./pages/profil_enfant/profil_enfant.page').then((m) => m.ProfilEnfantPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./pages/accueil/accueil.page').then((m) => m.AccueilPage),
  },
];
