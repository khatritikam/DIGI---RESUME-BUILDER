import { Component, Input } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';
import { AddOrEditResumeComponent } from '../dialogues/add-or-edit-resume/add-or-edit-resume.component';
import { MatDialog } from '@angular/material/dialog';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resume-card',
  templateUrl: './resume-card.component.html',
  styleUrls: ['./resume-card.component.scss']
})
export class ResumeCardComponent {
  hover = false;
  @Input() resume: Resume;

  constructor(
    private matDialog: MatDialog,
    private resumeRepo: ResumeRepository,
    private alertService: AlertService,
    private router: Router,) {
  }
  editResume() {
    this.matDialog.open(AddOrEditResumeComponent, {
      data: this.resume,
      width: '50%',
      height: '23%'
    });
  }

  delete() {
    this.resumeRepo.deleteResume(this.resume._id).subscribe(() => {
      this.alertService.success('Resume Deleted Successfully');
    });
  }

  download() {
    this.router.navigate(['dashboard', 'resume', 'template', this.resume._id]);
  }

  preview() {
    this.router.navigate(['dashboard', 'resume', 'preview', this.resume._id]);
  }
}
