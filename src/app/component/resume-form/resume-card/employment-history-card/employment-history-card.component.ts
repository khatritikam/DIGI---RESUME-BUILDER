import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploymentHistory } from 'src/app/models/employment-history.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { EmploymentHistoryFormComponent } from '../../resume-dialogues/employment-history-form/employment-history-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-employment-history-card',
  templateUrl: './employment-history-card.component.html',
  styleUrls: ['./employment-history-card.component.scss']
})
export class EmploymentHistoryCardComponent {
  @Input() employmentHistory: EmploymentHistory;
  @Input() resumeId: string;

  constructor(
    private dialog: MatDialog,
    private resumeRepo: ResumeRepository,
    private alertService: AlertService
    ) {}

    edit() {
      this.dialog.open(EmploymentHistoryFormComponent, {
        width: '90%', height: '90%', disableClose: true,
        data: {employmentHistory: this.employmentHistory,resumeId: this.resumeId}
      });
    }
  
    delete() {
      this.resumeRepo.deleteEmploymentHistory(this.employmentHistory._id, this.resumeId)
        .subscribe(data => {
          this.alertService.success('Employment History deleted Successfully');
        });
    }
}
