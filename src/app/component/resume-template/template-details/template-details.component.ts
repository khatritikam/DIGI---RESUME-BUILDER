import { AfterContentInit, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-template-details',
  templateUrl: './template-details.component.html',
  styleUrls: ['./template-details.component.scss']
})
export class TemplateDetailsComponent implements AfterContentInit{
  @Input() resume: Resume;
  videoUrl: any = '';
  constructor(private domSanatizer: DomSanitizer) {
  }
  ngAfterContentInit() {
    if (this.resume.video_url) {
      const id = this.resume.video_url.split('v=')[1];
      const url = 'https://www.youtube.com/embed/' + id;
      this.videoUrl = this.domSanatizer
        .bypassSecurityTrustResourceUrl(url);
    }
  }
}
