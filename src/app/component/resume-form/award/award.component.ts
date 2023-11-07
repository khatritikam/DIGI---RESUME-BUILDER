import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AwardsAchivement } from 'src/app/models/awards-achivement.model';
import { AwardFormComponent } from '../resume-dialogues/award-form/award-form.component';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent {
  @Input() resumeId: string;
  @Input() awards: AwardsAchivement[];

  constructor(private matDialog: MatDialog) {
  }

  add() {
    this.matDialog.open(AwardFormComponent, {
      width: '90%', height: '40%', data: {resumeId: this.resumeId}
    });
  }
} 
