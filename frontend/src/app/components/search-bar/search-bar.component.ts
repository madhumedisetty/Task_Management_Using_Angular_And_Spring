import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  searchTerm: string = '';
  suggestions: string[] = [];
  @Output() searchEmitter = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  onInputChange() {
    this.searchEmitter.emit(this.searchTerm);
  }
}