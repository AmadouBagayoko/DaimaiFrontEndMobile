import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // ← important pour tous les composants Ionic
import { CommonModule } from '@angular/common';

import {Router} from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';
import { arrowBackOutline } from 'ionicons/icons';


addIcons({
  'arrow-forward-outline': arrowForwardOutline,
  'arrow-back-outline': arrowBackOutline // ← flèche gauche
});

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  imports: [IonicModule, CommonModule],
})
export class SplashScreenComponent  implements OnInit {



  constructor(private router : Router) { }

  goBack(){
    this.router.navigate(['home/']);
    console.log("bouton cliquer");
  }

  

  onFirstClick() {
    this.router.navigate(['connexion/']);
    console.log('Premier bouton cliqué');
  
  }

  onSecondClick() {
    console.log('Deuxième bouton cliqué');
  
  }

  ngOnInit() {}

}
