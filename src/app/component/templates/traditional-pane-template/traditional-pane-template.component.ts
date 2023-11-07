import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-traditional-pane-template',
  templateUrl: './traditional-pane-template.component.html',
  styleUrls: ['./traditional-pane-template.component.scss']
})
export class TraditionalPaneTemplateComponent {

  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();
  constructor() {
  }
  download() {
    const innerHtml = document.getElementById('html')!.innerHTML;
    const html = `<html><head>
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<style type="text/css">
h1{
font-weight:100;
 color: #000000;
 padding-top: 22px;
font-size: 25px;
font-family: 'Google Sans', Roboto, sans-serif;
}
 h3, span {
      text-transform: uppercase;
      color: #767270;
      margin-top: 5%;
    }
    ul {
      color: #767270;
      font-weight: bold;
      font-size: 16px;
    }
    h4, p {
      color: #767270;
    }
</style>
<body>
${innerHtml}
</body>
</head></html>`;
    this.downloadTemplate.emit(html);
  }
}
