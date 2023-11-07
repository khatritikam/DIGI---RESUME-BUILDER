import { Component, Input } from '@angular/core';
import { IndustrialExposure } from 'src/app/models/industrial-exposure.model';

@Component({
  selector: 'app-template-industrial-exposure',
  templateUrl: './template-industrial-exposure.component.html',
  styleUrls: ['./template-industrial-exposure.component.scss']
})
export class TemplateIndustrialExposureComponent {
  @Input() industrialExposure: IndustrialExposure;
}
