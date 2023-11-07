import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Language } from 'src/app/models/language.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api.service';

interface DataType {
  language: Language;
  resumeId: any;
}

@Component({
  selector: 'app-language-form',
  templateUrl: './language-form.component.html',
  styleUrls: ['./language-form.component.scss']
})
export class LanguageFormComponent {

  form: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];

  constructor(
    public dialogRef: MatDialogRef<LanguageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, 
    private resumeRepo: ResumeRepository) {
}

ngOnInit() {
  const name = this.data.language ? this.data.language.name : null;
  const level = this.data.language ? this.data.language.level : null;
  this.form = new FormGroup({
    name: new FormControl(name, [Validators.required]),
    level: new FormControl(level, [Validators.required]),
  });
}

addOrUpdate() {
  if (this.data.language) {
    this.update();
  } else {
    this.save();
  }
}

save() {
  const observer$ = this.resumeRepo.addLanguage(this.form.value, this.data.resumeId);
  observer$.subscribe(data => {
    this.dialogRef.close();
  });
}

update() {
  const observer$ = this.resumeRepo.updateLanguage(this.form.value, this.data.resumeId, this.data.language._id);
  observer$.subscribe(data => {
    this.dialogRef.close();
  });
}

cancel() {
  this.dialogRef.close();
}
}
