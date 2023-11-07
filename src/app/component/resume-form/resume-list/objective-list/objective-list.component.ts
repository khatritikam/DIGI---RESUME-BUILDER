import { Component, Input } from '@angular/core';
import { Objective } from 'src/app/models/objective.model';

@Component({
  selector: 'app-objective-list',
  template: ` <app-objective-card [resumeId]="resumeId" *ngFor="let data of this.objectives" [objective]="data"></app-objective-card>`,
  styles: []
})
export class ObjectiveListComponent {
  @Input() objectives: Objective[];
  @Input() resumeId: string;
}
