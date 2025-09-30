import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header-back',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './header-back.component.html',
  styleUrls: ['./header-back.component.scss'],
})
export class HeaderBackComponent {
  @Input() title: string = '';
  @Input() showSponsorButton: boolean = false;
  @Output() sponsor = new EventEmitter<void>();

  constructor(private router: Router) {}

  goBack() {
    this.router.navigateByUrl('/accueil');
  }
}


