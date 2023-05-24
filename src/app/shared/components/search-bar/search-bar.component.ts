import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  searchTerm: string = '';
  suggestions: string[] = [];
  showSuggestions: boolean = false;

  constructor(private elementRef: ElementRef){}

  @HostListener('document:click', ['$event.target'])
  onClickOutside(targetElement: any) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.showSuggestions = false;
    }
  }

  search() {
    // Perform the search logic here and update the suggestions array
    // For demonstration purposes, let's simulate a search by filtering an array
    this.suggestions = ['Apple', 'Banana', 'Cherry', 'Durian']
      .filter(item => item.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.showSuggestions = true;
  }

  selectSuggestion(suggestion: string) {
    this.searchTerm = suggestion;
    this.showSuggestions = false;
  }
}
