import { Component, Input } from '@angular/core';
import { Education } from 'src/app/models/education.model';

@Component({
  selector: 'app-template-education-card',
  templateUrl: './template-education-card.component.html',
  styleUrls: ['./template-education-card.component.scss']
})
export class TemplateEducationCardComponent {
  @Input() education: Education;
}
