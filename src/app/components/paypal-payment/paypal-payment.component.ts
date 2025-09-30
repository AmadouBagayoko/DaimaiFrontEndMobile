import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonContent, 
  IonItem, 
  IonInput, 
  IonButton,
  IonSelect,
  IonSelectOption,
  IonText,
  IonDatetime,
  IonPopover,
  IonDatetimeButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-paypal-payment',
  templateUrl: './paypal-payment.component.html',
  styleUrls: ['./paypal-payment.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonText,
    IonDatetime,
    IonPopover,
    IonDatetimeButton
  ]
})
export class PaypalPaymentComponent {
  paymentForm!: FormGroup;
  countries = [
    'Mali',
    'France',
    'États-Unis',
    'Canada',
    'Allemagne',
    'Royaume-Uni',
    'Espagne',
    'Italie',
    'Belgique',
    'Suisse',
    'Sénégal',
    'Côte d\'Ivoire',
    'Autre'
  ];

  isOpen = false;
  showCustomCountry = false;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.paymentForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      cardNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{16}$/)]],
      expiry: ['', [Validators.required]],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]],
      amount: ['', [Validators.required, Validators.min(100)]],
      country: ['', [Validators.required]]
    });
  }

  setExpiryDate(event: any) {
    const date = new Date(event.detail.value);
    // const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    this.paymentForm.patchValue({
      expiry: `${month}/${year}`
    });
    this.isOpen = false;
  }

  openDatePicker() {
    this.isOpen = true;
  }

  onCountryChange(event: any) {
    const selectedValue = event.detail.value;
    if (selectedValue === 'Autre') {
      this.showCustomCountry = true;
      this.paymentForm.patchValue({ country: '' });
    } else {
      this.showCustomCountry = false;
      this.paymentForm.patchValue({ country: selectedValue });
    }
  }

  onCustomCountryInput(event: any) {
    this.paymentForm.patchValue({ country: event.detail.value });
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      const paymentData = this.paymentForm.value;
      console.log('Paiement PayPal:', paymentData);
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

  getCurrentDate(): string {
    return new Date().toISOString();
  }

  getMaxDate(): string {
    const date = new Date();
    date.setFullYear(date.getFullYear() + 10);
    return date.toISOString();
  }

  get name() { return this.paymentForm.get('name'); }
  get cardNumber() { return this.paymentForm.get('cardNumber'); }
  get expiry() { return this.paymentForm.get('expiry'); }
  get cvv() { return this.paymentForm.get('cvv'); }
  get amount() { return this.paymentForm.get('amount'); }
  get country() { return this.paymentForm.get('country'); }
}