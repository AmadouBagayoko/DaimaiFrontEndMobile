import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'payment',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // Ajoutez ces routes pour l'inscription
  {
    path: 'registration-step1',
    loadComponent: () => import('./components/school-registration/school-registration.component').then((m) => m.SchoolRegistrationComponent),
  },
  {
    path: 'registration-step2',
    loadComponent: () => import('./components/school-registration-step2/school-registration-step2.component').then((m) => m.SchoolRegistrationStep2Component),
  },

  {
  path: 'payment',
  loadComponent: () => import('./components/payment-method/payment-method.component').then((m) => m.PaymentMethodComponent),
}
];