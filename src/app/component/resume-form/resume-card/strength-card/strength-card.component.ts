import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { StrengthFormComponent } from '../../resume-dialogues/strength-form/strength-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-strength-card',
  templateUrl: './strength-card.component.html',
  styleUrls: ['./strength-card.component.scss']
})
export class StrengthCardComponent {
  @Input() strength: Strength;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(StrengthFormComponent, {
      width: '90%', height: '35%', data: {strength: this.strength,resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteStrength(this.resumeId, this.strength._id).subscribe(data => {
        this.alertService.success('strength deleted Successfully');
      });
  }
}
