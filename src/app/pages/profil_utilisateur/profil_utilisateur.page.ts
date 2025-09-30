import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderBackComponent } from '../../components/header-back/header-back.component';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';

@Component({
  selector: 'app-profil-utilisateur',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    HeaderBackComponent,
    FooterTabsComponent,
  ],
  templateUrl: './profil_utilisateur.page.html',
  styleUrls: ['./profil_utilisateur.page.scss'],
})
export class ProfilUtilisateurPage {
  user = {
    name: 'Amadou Bagayogo',
    level: 'Informations Personnelles',
    avatar: 'assets/images/enfant1.png',
    email: 'amadoubaga@gmail.com',
    phone: '+223 70 70 70 70',
    address: 'Rue Boubou Toure, Bamako',
  };

  activeTab: 'accueil' | 'parrainage' | 'paiement' | 'profil' = 'profil';

  constructor() {}
}
