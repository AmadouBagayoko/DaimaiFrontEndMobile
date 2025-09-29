import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // Important pour les modules Angular de base
import { Router, RouterLink } from '@angular/router'; // Pour la directive routerLink dans le template

@Component({
  selector: 'app-connexion', // Conserve l'ancien sélecteur
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule, // Souvent nécessaire pour des choses comme ngIf, ngFor si vous les utilisez
    RouterLink // Ajoutez RouterLink pour que la directive routerLink fonctionne
  ]
})
export class ConnexionComponent implements OnInit {

  // Propriétés du formulaire d'Inscription
  prenom: string = '';
  nom: string = '';
  telephone: string = '';
  email: string = '';

  constructor(private router : Router) { }

  goToNextPage() {
    this.router.navigate(['/connexion1']);
  }

  ngOnInit() {
  }

  submitForm() {
    console.log('Formulaire d\'Inscription soumis ! Données :');
    console.log('Prénom:', this.prenom);
    console.log('Nom:', this.nom);
    console.log('Téléphone:', this.telephone);
    console.log('Email:', this.email);

    // TODO: Ajoutez ici la logique d'appel d'API et la navigation.
    // Par exemple, pour naviguer vers une page de confirmation ou de connexion:
    // this.router.navigateByUrl('/confirmation-inscription');
  }
}