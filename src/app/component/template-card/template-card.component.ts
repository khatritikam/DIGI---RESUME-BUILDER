import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent {
  @Input() template: any;
  @Input() resumeId: any;

  constructor(private router: Router) {
  }

  openTemplate() {
    this.router.navigate(['dashboard', 'resume', 'template',
      this.resumeId, this.template.id]);
  }
}
