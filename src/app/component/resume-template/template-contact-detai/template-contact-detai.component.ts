import { AfterContentInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-template-contact-detail',
  templateUrl: './template-contact-detai.component.html',
  styleUrls: ['./template-contact-detai.component.scss']
})
export class TemplateContactDetaiComponent implements AfterContentInit {

  @Input() resume: Resume;
  imageUrl = '';

  constructor() {
  }

  ngAfterContentInit() {
    this.imageUrl = this.resume.image_url != null ? this.resume.image_url : '../../../../assets/testimonial.png';
  }
}
