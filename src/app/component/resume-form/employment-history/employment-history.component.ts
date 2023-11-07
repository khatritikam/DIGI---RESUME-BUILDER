import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history.model';
import { EmploymentHistoryFormComponent } from '../resume-dialogues/employment-history-form/employment-history-form.component';

@Component({
  selector: 'app-employment-history',
  templateUrl: './employment-history.component.html',
  styleUrls: ['./employment-history.component.scss']
})
export class EmploymentHistoryComponent {
  @Input() employmentHistories: EmploymentHistory[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(EmploymentHistoryFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
