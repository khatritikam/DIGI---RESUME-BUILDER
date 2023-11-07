import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/models/language.model';
import { LanguageFormComponent } from '../resume-dialogues/language-form/language-form.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent {

  @Input() languages: Language[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(LanguageFormComponent, {
      width: '90%', height: '40%',
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    
  }
}
