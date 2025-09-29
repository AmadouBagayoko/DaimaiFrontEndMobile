import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class SearchBarComponent implements OnInit {
  constructor() {}
  searchText: string = '';
  @Output() searchChange = new EventEmitter<string>();

  ngOnInit() {}
  onInput(ev: any) {
    this.searchChange.emit(this.searchText);
  }
}
