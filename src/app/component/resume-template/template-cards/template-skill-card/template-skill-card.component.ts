import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-template-skill-card',
  templateUrl: './template-skill-card.component.html',
  styleUrls: ['./template-skill-card.component.scss']
})
export class TemplateSkillCardComponent {
  @Input() skill: Skill;
}
