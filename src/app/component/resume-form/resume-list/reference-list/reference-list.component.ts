import { Component, Input } from '@angular/core';
import { Refrence } from 'src/app/models/refrence.model';

@Component({
  selector: 'app-reference-list',
  template:  `<app-reference-card [resumeId]="resumeId"  *ngFor="let data of referenceList" [reference]="data"></app-reference-card>`,
  styles: []
})
export class ReferenceListComponent {
  @Input() referenceList: Refrence[];
  @Input() resumeId: string;
}
