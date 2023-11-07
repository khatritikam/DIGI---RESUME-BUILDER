import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Education } from 'src/app/models/education.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api.service';

export interface DataType {
  resumeId: string;
  education: Education;
}


@Component({
  selector: 'app-education-form',
  templateUrl: './education-form.component.html',
  styleUrls: ['./education-form.component.scss']
})
export class EducationFormComponent implements OnInit {

  educationForm: FormGroup;
  monthArray = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(
    public dialogRef: MatDialogRef<EducationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private resumeRepo: ResumeRepository
  ) {}
 
  ngOnInit(): void {
    const schoolName = this.data.education ? this.data.education.school_name : null;
    const city = this.data.education ? this.data.education.city : null;
    const state = this.data.education ? this.data.education.state : null;
    const field = this.data.education ? this.data.education.field : null;
    const degreeType = this.data.education ? this.data.education.degree_type : null;
    const graduationMonth = this.data.education ? this.data.education.graduation_month : null;
    const graduationYear = this.data.education ? this.data.education.graduation_year : null;
    const percentage = this.data.education ? this.data.education.percentage : null;

    this.educationForm = new FormGroup({
      school_name: new FormControl(schoolName, [Validators.required]),
      city: new FormControl(city, [Validators.required]),
      state: new FormControl(state, [Validators.required]),
      field: new FormControl(field, [Validators.required]),
      degree_type: new FormControl(degreeType, [Validators.required]),
      graduation_month: new FormControl(graduationMonth, [Validators.required]),
      graduation_year: new FormControl(graduationYear, [Validators.required]),
      percentage: new FormControl(percentage, [Validators.required]),
    })
  }

  addOrUpdate(){
    if(this.data.education){
      this.update();
    }else{
      this.save()
    }
  }

  save(){
    const observer$ = this.resumeRepo.addEducation(this.educationForm.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update(){
    const observer$ = this.resumeRepo.updateEducation(this.educationForm.value, this.data.education._id, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }
}
