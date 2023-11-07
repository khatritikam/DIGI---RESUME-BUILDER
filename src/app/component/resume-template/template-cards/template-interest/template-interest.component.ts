import { Component, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest.model';

@Component({
  selector: 'app-template-interest',
  templateUrl: './template-interest.component.html',
  styleUrls: ['./template-interest.component.scss']
})
export class TemplateInterestComponent {
  @Input() interest: Interest;
}
