import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Objective } from 'src/app/models/objective.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ObjectiveFormComponent } from '../../resume-dialogues/objective-form/objective-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-objective-card',
  templateUrl: './objective-card.component.html',
  styleUrls: ['./objective-card.component.scss']
})
export class ObjectiveCardComponent {
  @Input() objective: Objective;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(ObjectiveFormComponent, {
      width: '90%', height: '70%', data: {objective: this.objective, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteObjective(this.resumeId, this.objective._id).subscribe(data => {
        this.alertService.success('Objective deleted Successfully');
      });
  }
}
