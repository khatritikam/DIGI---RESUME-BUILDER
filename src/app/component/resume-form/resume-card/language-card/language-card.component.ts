import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Language } from 'src/app/models/language.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { LanguageFormComponent } from '../../resume-dialogues/language-form/language-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss']
})
export class LanguageCardComponent {
  @Input() language: Language;
  @Input() resumeId: string

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(LanguageFormComponent, {
      width: '90%', height: '40%', data: {language: this.language, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteLanguage(this.resumeId, this.language._id).subscribe(data => {
        this.alertService.success('Language deleted Successfully');
      });
  }
}
