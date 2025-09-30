import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router: Router) {}
  userName: string = 'Ibrahim';
  activeTab: 'accueil' | 'parrainage' | 'paiement' | 'profil' = 'accueil';
  associations = [
    { id: 1, title: 'Jardin des Enfants', type: 'ONG', imageSrc: 'assets/images/img1.jpg' },
    { id: 2, title: 'KANUYA Mali', type: 'Orphelinat', imageSrc: 'assets/images/OIP.webp' },
    { id: 3, title: 'Demisenya', type: 'ONG', imageSrc: 'assets/images/R.jfif' },
    { id: 4, title: 'AIDD-Mali', type: 'Orphelinat', imageSrc: 'assets/images/OIP (2).webp' },
    { id: 5, title: 'UNICEF Mali', type: 'Orphelinat', imageSrc: 'assets/images/img2.jfif' },
    { id: 6, title: 'APSEF', type: 'ONG', imageSrc: 'assets/images/OIP (1).webp' },
  ];
  filteredAssociations = this.associations;

  onSearchChange(text: string) {
    const q = (text || '').toLowerCase();
    this.filteredAssociations = this.associations.filter(a =>
      a.title.toLowerCase().includes(q) || a.type.toLowerCase().includes(q)
    );
  }

  goToAssociation(a: { id: number }) {
    this.router.navigate(['/association', a.id]);
  }
}
