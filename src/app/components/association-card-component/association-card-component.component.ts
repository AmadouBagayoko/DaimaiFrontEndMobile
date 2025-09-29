import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-association-card-component',
  templateUrl: './association-card-component.component.html',
  styleUrls: ['./association-card-component.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class AssociationCardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() type: string = '';
  constructor() {}
}
