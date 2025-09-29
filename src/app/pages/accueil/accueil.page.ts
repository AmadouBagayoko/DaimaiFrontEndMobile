import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { AssociationCardComponent } from '../../components/association-card-component/association-card-component.component';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';

@Component({
  selector: 'app-home',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HeaderComponent, SearchBarComponent, AssociationCardComponent, FooterTabsComponent],
})
export class AccueilPage {
  constructor() {}
  userName: string = 'Ibrahim';
  activeTab: 'accueil' | 'parrainage' | 'paiement' | 'profil' = 'accueil';
  associations = [
    { title: 'Jardin des Enfants', type: 'ONG', imageSrc: 'assets/images/img1.jpg' },
    { title: 'KANUYA Mali', type: 'Orphelinat', imageSrc: 'assets/images/OIP.webp' },
    { title: 'Demisenya', type: 'ONG', imageSrc: 'assets/images/R.jfif' },
    { title: 'AIDD-Mali', type: 'Orphelinat', imageSrc: 'assets/images/OIP (2).webp' },
    { title: 'UNICEF Mali', type: 'Orphelinat', imageSrc: 'assets/images/img2.jfif' },
    { title: 'APSEF', type: 'ONG', imageSrc: 'assets/images/OIP (1).webp' },
  ];
  filteredAssociations = this.associations;

  onSearchChange(text: string) {
    const q = (text || '').toLowerCase();
    this.filteredAssociations = this.associations.filter(a =>
      a.title.toLowerCase().includes(q) || a.type.toLowerCase().includes(q)
    );
  }
}
