import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { EmploymentHistory } from 'src/app/models/employment-history.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';

interface DataType {
  resumeId: string;
  employmentHistory: EmploymentHistory;
}

@Component({
  selector: 'app-employment-history-form',
  templateUrl: './employment-history-form.component.html',
  styleUrls: ['./employment-history-form.component.scss']
})
export class EmploymentHistoryFormComponent implements OnInit{
  form: FormGroup;
  monthArray = ['January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'November', 'December'];

  constructor(
    public dialogRef: MatDialogRef<EmploymentHistoryFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,      
    private resumeRepo: ResumeRepository
    ) {}

    ngOnInit(): void {
      const employer = this.data.employmentHistory ? this.data.employmentHistory.employer : null;
      const designation = this.data.employmentHistory ? this.data.employmentHistory.designation : null;
      const organisation = this.data.employmentHistory ? this.data.employmentHistory.organisation : null;
      const city = this.data.employmentHistory ? this.data.employmentHistory.city : null;
      const state = this.data.employmentHistory ? this.data.employmentHistory.state : null;
      const startMonth = this.data.employmentHistory ? this.data.employmentHistory.start_month : null;
      const startYear = this.data.employmentHistory ? this.data.employmentHistory.start_year : null;
      const endMonth = this.data.employmentHistory ? this.data.employmentHistory.end_month : null;
      const endYear = this.data.employmentHistory ? this.data.employmentHistory.end_year : null;
      this.form = new FormGroup({
        employer: new FormControl(employer, [Validators.required]),
        designation: new FormControl(designation, [Validators.required]),
        organisation: new FormControl(organisation, [Validators.required]),
        city: new FormControl(city, [Validators.required]),
        state: new FormControl(state, [Validators.required]),
        start_month: new FormControl(startMonth, [Validators.required]),
        start_year: new FormControl(startYear, [Validators.required]),
        end_month: new FormControl(endMonth),
        end_year: new FormControl(endYear),
      });
    }

    addOrUpdate() {
      if (this.data.employmentHistory) {
        this.update();
      } else {
        this.save();
      }
    }
  
    save() {
      const observer$ = this.resumeRepo.addEmploymentHistory(this.form.value, this.data.resumeId);
      observer$.subscribe(data => {
        this.dialogRef.close();
      });
    }
  
    update() {
      const observer$ = this.resumeRepo.updateEmploymentHistory(this.form.value, this.data.employmentHistory._id, this.data.resumeId);
      observer$.subscribe(data => {
        this.dialogRef.close();
      });
    }
  
    cancel() {
      this.dialogRef.close();
    }
}
