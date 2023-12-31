import { Component, Input } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement.model';

@Component({
  selector: 'app-award-list',
  template: `<app-award-card [resumeId]="resumeId" *ngFor="let data of awardList" [award]="data"></app-award-card>`,
  styles: []
})
export class AwardListComponent {
  @Input() awardList: AwardsAchivement[];
  @Input() resumeId: string;
}
