import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer-tabs',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './footer-tabs.component.html',
  styleUrls: ['./footer-tabs.component.scss'],
})
export class FooterTabsComponent {
  @Input() active: 'accueil' | 'parrainage' | 'paiement' | 'profil' = 'accueil';
  @Output() tabChange = new EventEmitter<'accueil' | 'parrainage' | 'paiement' | 'profil'>();

  setActive(tab: 'accueil' | 'parrainage' | 'paiement' | 'profil') {
    if (this.active !== tab) {
      this.active = tab;
      this.tabChange.emit(tab);
    }
  }
}


