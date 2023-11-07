import { Component, Input } from '@angular/core';
import { Weakness } from 'src/app/models/weakness.model';

@Component({
  selector: 'app-template-weakness-card',
  templateUrl: './template-weakness-card.component.html',
  styleUrls: ['./template-weakness-card.component.scss']
})
export class TemplateWeaknessCardComponent {
  @Input() weakness: Weakness
}
