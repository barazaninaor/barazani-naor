import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  public langService = inject(LanguageService);
  
  // מחזיר את התרגומים ישירות דרך השירות בהתאם לשפה הנוכחית
  get t() {
    return this.langService.getTranslation('cv');
  }
}