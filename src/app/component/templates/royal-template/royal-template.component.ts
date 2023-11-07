import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';

@Component({
  selector: 'app-royal-template',
  templateUrl: './royal-template.component.html',
  styleUrls: ['./royal-template.component.scss']
})
export class RoyalTemplateComponent {

  @Input() resume: Resume;
  @Output() downloadTemplate = new EventEmitter<string>();
  constructor() {
  }
  download() {
    const innterHtml = document.getElementById('html')!.innerHTML;
    const html = `<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link href='http://fonts.googleapis.com/css?family=Rokkitt:400,700|Lato:400,300' rel='stylesheet' type='text/css'>
 <style type="text/css">
          html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del,
          dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset,
          form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details,
          figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
            font: inherit;
            font-size: 100%;
            margin: 0;
            padding: 0;
            vertical-align: baseline;
          }
          article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
            display: block;
          }
          html, body {
            font-family: 'Lato', helvetica, arial, sans-serif;
            font-size: 16px;
            color: #222;
          }
          .clear {
            clear: both;
          }
          p {
            font-size: 1em;
            line-height: 1.4em;
            color: #444;
          }
          #cv {
            width: 90%;
            max-width: 800px;
            background: #f3f3f3;
            margin: 30px auto;
          }
          .mainDetails {
            padding: 25px 35px;
            border-bottom: 2px solid #cf8a05;
            background: #ededed;
          }
          #name h1 {
            font-size: 2.5em;
            font-weight: 700;
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            margin-bottom: -6px;
          }
          #name h2 {
            font-size: 2em;
            margin-left: 2px;
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
          }
          #mainArea {
            padding: 0 40px;
          }
          #headshot {
            width: 12.5%;
            float: left;
            margin-right: 30px;
          }
          #headshot img {
            width: 100%;
            height: auto;
            -webkit-border-radius: 50px;
            border-radius: 50px;
          }
          #name {
            float: left;
          }
          #contactDetails {
            float: right;
          }
          #contactDetails ul {
            list-style-type: none;
            font-size: 0.9em;
            margin-top: 2px;
          }
          #contactDetails ul li {
            margin-bottom: 3px;
            color: #444;
          }
          #contactDetails ul li a, a[href^=tel] {
            color: #444;
            text-decoration: none;
            -webkit-transition: all .3s ease-in;
            -moz-transition: all .3s ease-in;
            -o-transition: all .3s ease-in;
            -ms-transition: all .3s ease-in;
            transition: all .3s ease-in;
          }
          #contactDetails ul li a:hover {
            color: #cf8a05;
          }
          section {
            border-top: 1px solid #dedede;
            padding: 20px 0 0px;
          }
          section:first-child {
            border-top: 0;
          }
          section:last-child {
            padding: 20px 0 10px;
          }
          .sectionTitle {
            float: left;
            width: 25%;
          }
          .sectionContent {
            float: right;
            width: 72.5%;
            margin-bottom: 20px;
          }
          .sectionTitle h1 {
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            font-style: italic;
            font-size: 1.5em;
            color: #cf8a05;
          }
          .sectionContent h2 {
            font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
            font-size: 1.5em;
            margin-bottom: -2px;
          }
          .subDetails {
            font-size: 0.8em;
            font-style: italic;
            margin-bottom: 3px;
          }
          .keySkills {
            list-style-type: none;
            -moz-column-count: 3;
            -webkit-column-count: 3;
            column-count: 3;
            font-size: 1em;
            color: #444;
          }
          .keySkills ul li {
            margin-bottom: 3px;
          }
          @media all and (min-width: 602px) and (max-width: 800px) {
            #headshot {
              display: none;
            }
            .keySkills {
              -moz-column-count: 2;
              -webkit-column-count: 2;
              column-count: 2;
            }
          }
          @media all and (max-width: 601px) {
            #cv {
              width: 95%;
              min-width: 280px;
            }
            #headshot {
              display: none;
            }
            #name, #contactDetails {
              float: none;
              width: 100%;
              text-align: center;
            }
            .sectionTitle, .sectionContent {
              float: none;
              width: 100%;
            }
            .sectionTitle {
              margin-left: -2px;
              font-size: 1.25em;
            }
            .keySkills {
              -moz-column-count: 2;
              -webkit-column-count: 2;
              column-count: 2;
            }
          }
          @media all and (max-width: 480px) {
            .mainDetails {
              padding: 15px 15px;
            }
            section {
              padding: 15px 0 0;
            }
            #mainArea {
              padding: 0 25px;
            }
            .keySkills {
              -moz-column-count: 1;
              -webkit-column-count: 1;
              column-count: 1;
            }
            #name h1 {
              line-height: .8em;
              margin-bottom: 4px;
            }
          }
          @media print {
            #cv {
              width: 100%;
            }
          }
        </style>
        <body>
${innterHtml}
</body>
</head>
</html>`;
    this.downloadTemplate.emit(html);
  }
}
