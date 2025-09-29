import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ← important pour tous les composants Ionic
import { CommonModule } from '@angular/common';
import { arrowForwardOutline } from 'ionicons/icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonicModule, CommonModule], // pas besoin d'importer IonContent directement
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  arrowForward = arrowForwardOutline; // icône flèche

  constructor(private router: Router) {}

  goToNextPage() {
    this.router.navigate(['/next-page']);
  }
}
