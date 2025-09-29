import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HeaderComponent implements OnInit {
  @Input() userName: string = 'Ibrahim';
  @Input() showGreeting: boolean = true;
  @Input() title: string = '';
  constructor() {}

  ngOnInit() {}
}
