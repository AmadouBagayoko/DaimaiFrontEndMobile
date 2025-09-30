import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonButton, 
  IonText,
  NavController 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-school-registration',
  templateUrl: './school-registration.component.html',
  styleUrls: ['./school-registration.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonButton,
    IonText
  ]
})
export class SchoolRegistrationComponent {
  schoolForm!: FormGroup;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.schoolForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.schoolForm.valid) {
      const formData = this.schoolForm.value;
      console.log('Données du formulaire:', formData);
      
      // Navigation vers la page suivante (étape 2)
      this.navigateToNext();
    } else {
      this.markFormGroupTouched();
    }
  }

  navigateToNext() {
    // Navigation vers le composant d'étape 2
    this.navCtrl.navigateForward('/registration-step2');
  }

  markFormGroupTouched() {
    Object.keys(this.schoolForm.controls).forEach(key => {
      this.schoolForm.get(key)?.markAsTouched();
    });
  }

  get name() { return this.schoolForm.get('name'); }
  get email() { return this.schoolForm.get('email'); }
  get address() { return this.schoolForm.get('address'); }
}