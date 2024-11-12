import { Component, EventEmitter, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  searchTerm: string = '';
  suggestions: string[] = [];
  @Output() searchEmitter = new EventEmitter<string>();

  constructor(private taskService: TaskService) {}

  onInputChange() {
    this.searchEmitter.emit(this.searchTerm);
    this.getSuggestions();
  }

  getSuggestions() {
    if (this.searchTerm.length > 0) {
      this.taskService.getSearchSuggestions(this.searchTerm).subscribe(
        (suggestions: string[]) => {
          this.suggestions = suggestions;
        },
        (error) => {
          console.error('Error fetching suggestions:', error);
        }
      );
    } else {
      this.suggestions = [];
    }
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.suggestions = [];
    this.searchEmitter.emit(this.searchTerm);
  }
  highlightMatch(suggestion: string, term: string): string {
    const regex = new RegExp(`(${term})`, 'gi');
    return suggestion.replace(regex, '<strong>$1</strong>');
  }
}
