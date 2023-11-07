import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Weakness } from 'src/app/models/weakness.model';
import { WeaknessFormComponent } from '../resume-dialogues/weakness-form/weakness-form.component';

@Component({
  selector: 'app-weakness',
  templateUrl: './weakness.component.html',
  styleUrls: ['./weakness.component.scss']
})
export class WeaknessComponent {
  @Input() weaknesses: Weakness[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(WeaknessFormComponent, {
      width:'90%', height:'35%',
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    
  }
}
