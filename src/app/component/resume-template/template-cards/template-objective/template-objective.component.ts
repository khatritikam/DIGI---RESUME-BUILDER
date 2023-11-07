import { Component, Input } from '@angular/core';
import { Objective } from 'src/app/models/objective.model';

@Component({
  selector: 'app-template-objective',
  templateUrl: './template-objective.component.html',
  styleUrls: ['./template-objective.component.scss']
})
export class TemplateObjectiveComponent {
  @Input() objective: Objective;
}
