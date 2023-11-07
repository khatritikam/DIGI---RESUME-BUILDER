import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api.service';

interface DataType {
  reference: Refrence;
  resumeId: any;
}

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss']
})
export class ReferenceFormComponent {

  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReferenceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, 
    private resumeRepo: ResumeRepository) {
  }

  ngOnInit() {
    const name = this.data.reference ? this.data.reference.name : null;
    const relationship = this.data.reference ? this.data.reference.relationship : null;
    const company = this.data.reference ? this.data.reference.company : null;
    const email = this.data.reference ? this.data.reference.email : null;
    const phone = this.data.reference ? this.data.reference.phone : null;
    const address = this.data.reference ? this.data.reference.address : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      relationship: new FormControl(relationship, [Validators.required]),
      company: new FormControl(company, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      phone: new FormControl(phone, [Validators.required]),
      address: new FormControl(address, [Validators.required]),
    });
  }

  addOrUpdate() {
    if (this.data.reference) {
      this.update();
    } else {
      this.save();
    }
  }

  save() {
    const observer$ = this.resumeRepo.addReference(this.form.value, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  update() {
    const observer$ = this.resumeRepo.updateReference(this.form.value, this.data.resumeId, this.data.reference._id);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
