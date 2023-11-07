import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api.service';

interface DataType {
  interest: Interest;
  resumeId: any;
}

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.component.html',
  styleUrls: ['./interest-form.component.scss']
})
export class InterestFormComponent implements OnInit{

  form: FormGroup;
  
  constructor(
    public dialogRef: MatDialogRef<InterestFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DataType,
               private resumeRepo: ResumeRepository) {
  }

  ngOnInit(): void {
    const interest = this.data.interest ? this.data.interest.interest : null;
    this.form = new FormGroup({
      interest: new FormControl(interest, [Validators.required])
    });
  }

  addOrUpdate() {
    if (this.data.interest) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addInterest(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateInterest(this.form.value, this.data.resumeId, this.data.interest._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
