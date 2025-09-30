import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  IonContent, 
  IonItem, 
  IonInput, 
  IonButton,
  IonText,
  NavController 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-school-registration-step2',
  templateUrl: './school-registration-step2.component.html',
  styleUrls: ['./school-registration-step2.component.scss'],
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
export class SchoolRegistrationStep2Component {
  schoolForm!: FormGroup;
  selectedPhoneFile: File | null = null;
  selectedPhotoFile: File | null = null;

  constructor(
    private navCtrl: NavController,
    private formBuilder: FormBuilder
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.schoolForm = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s()]{10,}$/)]]
    });
  }

  onPhoneFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedPhoneFile = file;
      console.log('Fichier téléphone sélectionné:', file.name);
    }
  }

  onPhotoFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedPhotoFile = file;
      console.log('Fichier photo sélectionné:', file.name);
    }
  }

  triggerPhoneFileInput() {
    const fileInput = document.getElementById('phoneFile') as HTMLInputElement;
    fileInput?.click();
  }

  triggerPhotoFileInput() {
    const fileInput = document.getElementById('photoFile') as HTMLInputElement;
    fileInput?.click();
  }

  getFileName(file: File | null): string {
    return file ? file.name : 'Aucun fichier sélectionné';
  }

  onSubmit() {
    if (this.schoolForm.valid && this.selectedPhoneFile && this.selectedPhotoFile) {
      const formData = {
        ...this.schoolForm.value,
        phoneFile: this.selectedPhoneFile,
        photoFile: this.selectedPhotoFile
      };
      
      console.log('Données du formulaire étape 2:', formData);
      
      // Navigation vers la page suivante ou soumission finale
      this.navigateToNext();
    } else {
      this.markFormGroupTouched();
    }
  }

  navigateToNext() {
    // Remplacez par le chemin de votre page suivante
    this.navCtrl.navigateForward('/final-step');
  }

  markFormGroupTouched() {
    Object.keys(this.schoolForm.controls).forEach(key => {
      this.schoolForm.get(key)?.markAsTouched();
    });
  }

  get phone() { return this.schoolForm.get('phone'); }
}