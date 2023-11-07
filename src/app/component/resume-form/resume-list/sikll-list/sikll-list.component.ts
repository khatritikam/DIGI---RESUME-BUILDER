import { Component, Input } from '@angular/core';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-sikll-list',
  template: `<app-skill-card [resumeId]="resumeId" *ngFor="let skill of skillList" [skill]="skill"></app-skill-card>`,
  styles: []
})
export class SikllListComponent {
  @Input() skillList: Skill[];
  @Input() resumeId: string;
}
