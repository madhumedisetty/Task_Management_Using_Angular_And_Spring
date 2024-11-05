// In search-bar.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  @Output() searchEmitter = new EventEmitter<string>();

  onInputChange() {
    this.searchEmitter.emit(this.searchTerm);
  }
}