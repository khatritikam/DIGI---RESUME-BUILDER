import { Component, Input } from '@angular/core';
import { Refrence } from 'src/app/models/refrence.model';

@Component({
  selector: 'app-template-reference',
  templateUrl: './template-reference.component.html',
  styleUrls: ['./template-reference.component.scss']
})
export class TemplateReferenceComponent {
  @Input() reference: Refrence;
}
