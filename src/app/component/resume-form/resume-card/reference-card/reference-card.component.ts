import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ReferenceFormComponent } from '../../resume-dialogues/reference-form/reference-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-reference-card',
  templateUrl: './reference-card.component.html',
  styleUrls: ['./reference-card.component.scss']
})
export class ReferenceCardComponent {

  @Input() reference: Refrence;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ReferenceFormComponent, {
      width: '90%', height: '90%', data: {reference: this.reference,resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteReference(this.resumeId, this.reference._id).subscribe(data => {
        this.alertService.success('Reference deleted Successfully');
      });
  }
}
