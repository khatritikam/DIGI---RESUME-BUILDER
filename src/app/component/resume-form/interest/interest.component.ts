import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest.model';
import { InterestFormComponent } from '../resume-dialogues/interest-form/interest-form.component';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.scss']
})
export class InterestComponent {

  @Input() interests: Interest[];
  @Input() resumeId: string;

  constructor(private dialog: MatDialog) {
  }

  add() {
   this.dialog.open(InterestFormComponent, {
    width: '90%', height: '40%',
    data: {resumeId: this.resumeId},
    disableClose: true,
    });
    
  }
}
