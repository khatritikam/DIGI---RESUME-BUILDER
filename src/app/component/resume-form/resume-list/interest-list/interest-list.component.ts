import { Component, Input } from '@angular/core';
import { Interest } from 'src/app/models/interest.model';

@Component({
  selector: 'app-interest-list',
  template: `<app-interest-card [resumeId]="resumeId" *ngFor="let interest of this.interestList" [interest]="interest"></app-interest-card>`,
  styles: []
})
export class InterestListComponent {
  @Input() interestList: Interest[];
  @Input() resumeId: string;
}
