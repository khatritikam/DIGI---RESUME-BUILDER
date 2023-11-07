import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShareComponent } from '../template-cards/share/share.component';

@Component({
  selector: 'app-template-buttons',
  templateUrl: './template-buttons.component.html',
  styleUrls: ['./template-buttons.component.scss']
})
export class TemplateButtonsComponent {
  @Input() resumeId: string;
  @Input() isLeftPanelEnabled: boolean;

  constructor(
    private router: Router,
    private dialog: MatDialog) {
  }

  editResume() {
    this.router.navigate(['/dashboard/resume/edit/' + this.resumeId]);
  }

  editProfile() {
    this.router.navigate(['/dashboard/resume/edit/profile/' + this.resumeId]);
  }

  sharelink(){
    this.dialog.open(ShareComponent, {
      width:'70%' , height:'auto',
      data:{resumeId:this.resumeId}
    })
  }
}
