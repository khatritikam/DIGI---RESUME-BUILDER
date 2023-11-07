import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { InterestFormComponent } from '../../resume-dialogues/interest-form/interest-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-interest-card',
  templateUrl: './interest-card.component.html',
  styleUrls: ['./interest-card.component.scss']
})
export class InterestCardComponent {
  @Input() interest: Interest;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService
  ) {}

  edit() {
    this.matDialog.open(InterestFormComponent, {
      width: '90%', height: '40%', data: {interest: this.interest,resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteInterest(this.resumeId, this.interest._id)
      .subscribe(data => {
        this.alertService.success('Interest deleted Successfully');
      });
  }
}
