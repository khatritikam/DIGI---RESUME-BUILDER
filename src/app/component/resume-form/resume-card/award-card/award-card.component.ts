import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { AwardFormComponent } from '../../resume-dialogues/award-form/award-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-award-card',
  templateUrl: './award-card.component.html',
  styleUrls: ['./award-card.component.scss']
})
export class AwardCardComponent {
  @Input() award: AwardsAchivement;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '40%', data: {award: this.award,resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteAward(this.resumeId, this.award._id).subscribe(data => {
        this.alertService.success('Award deleted Successfully');
      });
  }
}
