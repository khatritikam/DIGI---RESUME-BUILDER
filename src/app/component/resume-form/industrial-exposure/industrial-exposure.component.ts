import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure.model';
import { IndustrialExposureFormComponent } from '../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';

@Component({
  selector: 'app-industrial-exposure',
  templateUrl: './industrial-exposure.component.html',
  styleUrls: ['./industrial-exposure.component.scss']
})
export class IndustrialExposureComponent {

  @Input() industrialExposures: IndustrialExposure[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(IndustrialExposureFormComponent, {
      width: '90%', height: '90%', data: {resumeId: this.resumeId}
    });
  }
}
