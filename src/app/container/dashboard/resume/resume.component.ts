import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddOrEditResumeComponent } from 'src/app/component/dialogues/add-or-edit-resume/add-or-edit-resume.component';
import { Resume } from 'src/app/models/resume.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  hover = false;
  resumeList: Resume[] = [];
  isAlive = true;
  loading = false;
  error = false;

  constructor(
    private resumeRepo: ResumeRepository,
    private matDialog: MatDialog) {
  }

  ngOnInit() {
    this.fetchData();
  }
  ngOnDestroy() {
    this.isAlive = false;
  }

  fetchData() {
    const observer$ = this.resumeRepo.fetchAllResumes();
    observer$[2].subscribe(resumes => {
      this.resumeList = resumes;
    });
    observer$[0].subscribe(loading => {
      this.loading = loading;
    });
  }

  addResume() {
    this.matDialog.open(AddOrEditResumeComponent, {
      height: '23%',
      width: '50%'
    });
  }
}
