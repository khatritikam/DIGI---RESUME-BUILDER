import { Component, Input } from '@angular/core';
import { EmploymentHistory } from 'src/app/models/employment-history.model';

@Component({
  selector: 'app-template-employment-history',
  templateUrl: './template-employment-history.component.html',
  styleUrls: ['./template-employment-history.component.scss']
})
export class TemplateEmploymentHistoryComponent {
  @Input() employmentHistory: EmploymentHistory;
}
