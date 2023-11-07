import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Strength } from 'src/app/models/strength.model';
import { StrengthFormComponent } from '../resume-dialogues/strength-form/strength-form.component';

@Component({
  selector: 'app-strength',
  templateUrl: './strength.component.html',
  styleUrls: ['./strength.component.scss']
})
export class StrengthComponent {

  @Input() strength: Strength[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
   this.dialog.open(StrengthFormComponent, {
      width:'90%', height:'35%',
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
  }
}
