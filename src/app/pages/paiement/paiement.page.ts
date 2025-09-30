import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HeaderBackComponent } from '../../components/header-back/header-back.component';
import { FooterTabsComponent } from '../../components/footer-tabs/footer-tabs.component';

@Component({
  selector: 'app-payment',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  imports: [IonicModule, HeaderBackComponent, FooterTabsComponent],
})
export class PaymentPage {
  associationName = 'Jardin des Enfants';

  constructor() {}

  // Méthodes pour les boutons d'action
  onAvoidClick() {
    console.log('Avoid clicked');
    // Implémentez la logique pour Avoid
  }

  onPrototypeClick() {
    console.log('Prototype clicked');
    // Implémentez la logique pour Prototype
  }

  onPulitzerClick() {
    console.log('Pulitzer clicked');
    // Implémentez la logique pour Pulitzer
  }

  onPrintClick() {
    console.log('Print clicked');
    // Implémentez la logique pour Print
  }
}
