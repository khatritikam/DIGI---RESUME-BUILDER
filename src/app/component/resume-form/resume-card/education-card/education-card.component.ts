import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { EducationFormComponent } from '../../resume-dialogues/education-form/education-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.scss']
})
export class EducationCardComponent {
  @Input() education: Education;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }


  edit(){
    this.matDialog.open(EducationFormComponent,{
      width: '90%', height: '90%', data: {education: this.education, resumeId: this.resumeId}
    })
  }
  delete(){
    this.resumeRepo.deleteEducation(this.resumeId, this.education._id).subscribe(data =>{
      this.alertService.success('education deleted Successfully');
    })
  }
} 
