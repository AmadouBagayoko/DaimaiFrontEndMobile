import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderBackComponent } from '../../components/header-back/header-back.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';

type SponsoredChild = { id: number; name: string; avatar: string };

@Component({
  selector: 'app-parrainage',
  standalone: true,
  imports: [IonicModule, CommonModule, NgFor, HeaderBackComponent, SearchBarComponent, FooterTabsComponent],
  templateUrl: './parrainage.page.html',
  styleUrls: ['./parrainage.page.scss'],
})
export class ParrainagePage {
  title = 'Vos Parrainages';
  sponsored: SponsoredChild[] = [
    { id: 1, name: 'Amadou Bagayoko', avatar: 'assets/images/enfant1.png' },
  ];
}


