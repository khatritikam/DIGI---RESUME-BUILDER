import { Component, Input } from '@angular/core';
import { Language } from 'src/app/models/language.model';

@Component({
  selector: 'app-language-list',
  template: `<app-language-card [resumeId]="resumeId" *ngFor="let  language of languageList" [language]="language"></app-language-card>`,
  styles: []
})
export class LanguageListComponent {
  @Input() languageList: Language[];
  @Input() resumeId: string;
}
