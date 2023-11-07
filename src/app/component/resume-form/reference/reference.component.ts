import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Refrence } from 'src/app/models/refrence.model';
import { ReferenceFormComponent } from '../resume-dialogues/reference-form/reference-form.component';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent {

  @Input() resumeId: string;
  @Input() references: Refrence[];

  constructor(private dialog: MatDialog) {
  }

  add() {
    this.dialog.open(ReferenceFormComponent, {
      width:'90%',height:'90%',
      disableClose: true,
      data: {resumeId: this.resumeId}
    });
    
  }
}
