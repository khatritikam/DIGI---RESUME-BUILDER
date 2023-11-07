import { Component, Input } from '@angular/core';
import { Language } from 'src/app/models/language.model';

@Component({
  selector: 'app-template-language-card',
  templateUrl: './template-language-card.component.html',
  styleUrls: ['./template-language-card.component.scss']
})
export class TemplateLanguageCardComponent {
  @Input() language: Language;
}
