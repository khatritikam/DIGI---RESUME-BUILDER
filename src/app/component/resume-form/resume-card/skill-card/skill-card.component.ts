import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/models/skill.model';
import { AlertService } from 'src/app/services/alert.service';
import { SkillFormComponent } from '../../resume-dialogues/skill-form/skill-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {

  @Input() skill: Skill;
  @Input() resumeId: string;

  constructor(
    private matDialog: MatDialog, 
    private resumeRepository: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.matDialog.open(SkillFormComponent, {
      width: '90%', height: '40%', data: {skill: this.skill, resumeId: this.resumeId}
    });
  }

  delete() {
    this.resumeRepository.deleteSkill(this.skill._id,this.resumeId)
    .subscribe(data => {
        this.alertService.success('Skill deleted Successfully');
      });
  }
}
