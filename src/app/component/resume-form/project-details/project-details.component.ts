import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDetail } from 'src/app/models/project-detail.model';
import { ProjectDetailsFormComponent } from '../resume-dialogues/project-details-form/project-details-form.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent {

  @Input() resumeId: string;
  @Input() projectDetails: ProjectDetail[];

  constructor(private dialog: MatDialog) {
  }

  add() {
  this.dialog.open(ProjectDetailsFormComponent, {
      width:'90%',height:'70%',
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
  }
}
