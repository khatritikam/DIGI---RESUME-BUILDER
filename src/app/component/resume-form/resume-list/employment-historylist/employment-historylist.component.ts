import { Component, Input } from '@angular/core';
import { EmploymentHistory } from 'src/app/models/employment-history.model';

@Component({
  selector: 'app-employment-historylist',
  template: `<app-employment-history-card  [resumeId]="resumeId" *ngFor="let data of employmentHistoryList" [employmentHistory]="data"></app-employment-history-card>`,
  styles: []
})
export class EmploymentHistorylistComponent {
  @Input() employmentHistoryList: EmploymentHistory[];
  @Input() resumeId: string;
}
