import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Important pour les modules Angular de base
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-connexion1',
  templateUrl: './connexion1.component.html',
  styleUrls: ['./connexion1.component.scss'],
   standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule, // Souvent nécessaire pour des choses comme ngIf, ngFor si vous les utilisez
    RouterLink // Ajoutez RouterLink pour que la directive routerLink fonctionne
  ]
})
export class Connexion1Component  implements OnInit {

  // Propriétés du formulaire d'Inscription
  profession: string = '';
  domicile: string = '';
  motDepasse: string = '';
  cmotDepasse: string = '';

  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    console.log('Formulaire d\'Inscription soumis ! Données :');
    console.log('profession:', this.profession);
    console.log('domicile:', this.domicile);
    console.log('motDepasse:', this.motDepasse);
    console.log('cmotDepasse:', this.cmotDepasse);

    // TODO: Ajoutez ici la logique d'appel d'API et la navigation.
    // Par exemple, pour naviguer vers une page de confirmation ou de connexion:
    // this.router.navigateByUrl('/confirmation-inscription');
  }

}
