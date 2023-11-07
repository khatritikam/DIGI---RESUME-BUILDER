import { Component, Input } from '@angular/core';
import { IndustrialExposure } from 'src/app/models/industrial-exposure.model';

@Component({
  selector: 'app-industrial-exposure-list',
  template: `<app-industrial-exposure-card [resumeId]="resumeId" *ngFor="let data of industrialExposureList"
  [industrialExposure]="data"></app-industrial-exposure-card>`,
  styles: []
})
export class IndustrialExposureListComponent {
  @Input() industrialExposureList: IndustrialExposure[];
  @Input() resumeId: string;
}
