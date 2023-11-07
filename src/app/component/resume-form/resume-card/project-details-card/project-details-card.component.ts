import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/models/project-detail.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { ProjectDetailsFormComponent } from '../../resume-dialogues/project-details-form/project-details-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-project-details-card',
  templateUrl: './project-details-card.component.html',
  styleUrls: ['./project-details-card.component.scss']
})
export class ProjectDetailsCardComponent {

  @Input() projectDetail: ProjectDetail;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService
    ) {
  }

  edit() {
    this.matDialog.open(ProjectDetailsFormComponent, {
      width: '90%', height: '70%', data: {projectDetail: this.projectDetail,resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepo.deleteProjectDetail(this.resumeId, this.projectDetail._id)
      .subscribe(data => {
        this.alertService.success('Project Details deleted Successfully');
      });
  }
}   
