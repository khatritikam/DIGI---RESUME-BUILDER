import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.model';
import { EducationFormComponent } from '../resume-dialogues/education-form/education-form.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {
  @Input() resumeId: string;
  @Input() educations: Education[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(EducationFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
