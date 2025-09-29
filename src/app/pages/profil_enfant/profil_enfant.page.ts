import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';

@Component({
  selector: 'app-profil-enfant',
  standalone: true,
  imports: [IonicModule, CommonModule, NgFor, HeaderComponent, FooterTabsComponent],
  templateUrl: './profil_enfant.page.html',
  styleUrls: ['./profil_enfant.page.scss'],
})
export class ProfilEnfantPage {
  childId!: number;
  child = {
    name: 'Amadou Bagayoko',
    age: '13 ans',
    level: '7eme année',
    tutor: 'Moussa Bagayoko',
    expenses: '120,000 FCFA',
    avatar: 'assets/images/enfant1.png',
  };

  reports = [
    { id: 1, title: 'Bulletin T3-2024', avg: '12,45', presence: '95 %', date: '15/06/2024' },
    { id: 2, title: 'Bulletin T2-2024', avg: '13,44', presence: '92 %', date: '15/03/2024' },
    { id: 3, title: 'Bulletin T1-2024', avg: '11,20', presence: '89 %', date: '15/12/2023' },
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    this.childId = id ? +id : 0;
  }
}


