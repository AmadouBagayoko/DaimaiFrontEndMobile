import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderBackComponent } from '../../components/header-back/header-back.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';

type Child = {
  id: number;
  name: string;
  grade: string;
  avatar: string;
};

@Component({
  selector: 'app-association',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, NgFor, HeaderBackComponent, SearchBarComponent, FooterTabsComponent],
  templateUrl: './association.page.html',
  styleUrls: ['./association.page.scss'],
})
export class AssociationPage {
  associationId: string | null = null;
  associationName = 'Jardin des Enfants';
  userName = '';

  search = '';
  children: Child[] = [
    { id: 1, name: 'Amadou Bagayoko', grade: '7eme année', avatar: 'assets/images/enfant1.png' },
    { id: 2, name: 'Mariam Sow', grade: '5eme année', avatar: 'assets/images/enfant2.png' },
    { id: 3, name: 'Moussa Kamory', grade: '6eme année', avatar: 'assets/images/enfant3.png' },
    { id: 4, name: 'Awa Doumbia', grade: '6eme année', avatar: 'assets/images/enfant1.png' },
    { id: 5, name: 'Oumar Dolo', grade: '6eme année', avatar: 'assets/images/enfant2.png' },
  ];
  filtered: Child[] = this.children;
  showConfirm = false;
  selectedChild?: Child;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.associationId = this.route.snapshot.paramMap.get('id');
  }

  onSearchChange(text: string) {
    const q = (text || '').toLowerCase();
    this.filtered = this.children.filter(c => c.name.toLowerCase().includes(q) || c.grade.toLowerCase().includes(q));
  }

  openSponsorConfirm(child: Child) {
    this.selectedChild = child;
    this.showConfirm = true;
  }

  closeSponsorConfirm() {
    this.showConfirm = false;
  }

  confirmSponsor() {
    // TODO: intégration API plus tard
    this.showConfirm = false;
    this.router.navigate(['/parrainage']);
  }
}


