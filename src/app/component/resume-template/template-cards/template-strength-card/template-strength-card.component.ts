import { Component, Input } from '@angular/core';
import { Strength } from 'src/app/models/strength.model';

@Component({
  selector: 'app-template-strength-card',
  templateUrl: './template-strength-card.component.html',
  styleUrls: ['./template-strength-card.component.scss']
})
export class TemplateStrengthCardComponent {
  @Input() strength: Strength;

}
