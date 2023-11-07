import { Component, Input } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement.model';

@Component({
  selector: 'app-template-awards',
  templateUrl: './template-awards.component.html',
  styleUrls: ['./template-awards.component.scss']
})
export class TemplateAwardsComponent {
  @Input() award: AwardsAchivement;
}
