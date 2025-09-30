import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonButton,
  IonIcon,
  NavController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonItem,
    IonLabel,
    IonButton,
    IonIcon
  ]
})
export class PaymentMethodComponent {
  selectedMethod: string = '';

  constructor(private navCtrl: NavController) {}

  selectPaymentMethod(method: string) {
    this.selectedMethod = method;
    console.log('Méthode de paiement sélectionnée:', method);
    
    // Ici vous pouvez ajouter la logique de navigation ou de traitement
    this.processPayment(method);
  }

  processPayment(method: string) {
    // Logique de traitement du paiement selon la méthode sélectionnée
    switch(method) {
      case 'orange':
        this.navCtrl.navigateForward('/orange-money-payment');
        break;
      case 'moov':
        // Traitement Moov Money
        this.navCtrl.navigateForward('/moov-money-payment');
        break;
      case 'paypal':
        // Traitement PayPal
        this.navCtrl.navigateForward('/paypal-payment');
        break;
      case 'card':
        // Traitement Carte Bancaire
        this.navCtrl.navigateForward('/card-payment');
        break;
    }
  }
}