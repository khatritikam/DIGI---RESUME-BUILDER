import { Component, Input } from '@angular/core';
import { ProjectDetail } from 'src/app/models/project-detail.model';

@Component({
  selector: 'app-template-project-detail',
  templateUrl: './template-project-detail.component.html',
  styleUrls: ['./template-project-detail.component.scss']
})
export class TemplateProjectDetailComponent {
  @Input() projectDetail: ProjectDetail;
}
