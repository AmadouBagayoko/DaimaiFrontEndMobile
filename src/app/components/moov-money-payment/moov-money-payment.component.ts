import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonContent, 
  IonItem, 
  IonInput, 
  IonButton,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-moov-money-payment',
  templateUrl: './moov-money-payment.component.html',
  styleUrls: ['./moov-money-payment.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonText
  ]
})
export class MoovMoneyPaymentComponent {
  paymentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.paymentForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
      amount: ['', [Validators.required, Validators.min(100)]]
    });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      console.log('Paiement Moov Money:', paymentData);
      // Ici vous ajouterez la logique de traitement du paiement
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched() {
    Object.keys(this.paymentForm.controls).forEach(key => {
      this.paymentForm.get(key)?.markAsTouched();
    });
  }

  get phoneNumber() { return this.paymentForm.get('phoneNumber'); }
  get amount() { return this.paymentForm.get('amount'); }
}