import { Component, Input } from '@angular/core';
import { Weakness } from 'src/app/models/weakness.model';

@Component({
  selector: 'app-weakness-list',
  template: `<app-weakness-card [resumeId]="resumeId" *ngFor="let data of weaknessList"
  [weakness]="data"></app-weakness-card>`,
  styles: []
})
export class WeaknessListComponent {
  @Input() weaknessList: Weakness[];
  @Input() resumeId: string;
}
