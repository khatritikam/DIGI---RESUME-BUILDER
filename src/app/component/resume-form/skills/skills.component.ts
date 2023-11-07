import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/models/skill.model';
import { SkillFormComponent } from '../resume-dialogues/skill-form/skill-form.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  @Input() skills: Skill[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }
  
  add() {
    this.dialog.open(SkillFormComponent, {
      width: '90%', height: '40%',
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    
  }
}
