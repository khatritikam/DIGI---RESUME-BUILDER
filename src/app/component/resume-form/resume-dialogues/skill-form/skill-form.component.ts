import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Skill } from 'src/app/models/skill.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api.service';

interface DataType {
  skill: Skill;
  resumeId: string;
}

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.scss']
})
export class SkillFormComponent implements OnInit{

  form: FormGroup;
  levelArray = ['basic', 'intermediate', 'advance'];

  constructor(
    public dialogRef: MatDialogRef<SkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType, 
    private resumeRepository: ResumeRepository
    ) {}

    ngOnInit(): void {
      const skill = this.data.skill ? this.data.skill.skill : null;
      const level = this.data.skill ? this.data.skill.level : null;
      this.form = new FormGroup({
      skill: new FormControl(skill, [Validators.required]),
      level: new FormControl(level, [Validators.required])
    });
    }

    addOrUpdate() {
      if (this.data.skill) {
        this.update();
      } else {
        this.save();
      }
    }

    save() {
      const observer$ = this.resumeRepository.addSkill(this.form.value, this.data.resumeId);
      observer$.subscribe(data => {
        this.dialogRef.close();
      });
    }

    update() {
      const observer$ = this.resumeRepository.updateSkill(this.form.value, this.data.skill._id, this.data.resumeId);
    observer$.subscribe(data => {
      this.dialogRef.close();
    });
    }

    cancel() {
      this.dialogRef.close();
    }
  
  
}
