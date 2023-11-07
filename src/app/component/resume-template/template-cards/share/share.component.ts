import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClipboardService } from 'ngx-clipboard';
import { DataType } from 'src/app/component/resume-form/resume-dialogues/education-form/education-form.component';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent {
    public link = ''
    public resumeId: any;

    constructor(
      public dialogRef: MatDialogRef<ShareComponent>,
      @Inject(MAT_DIALOG_DATA) public data: DataType,
     private clipBoard:ClipboardService,
     private alertService:AlertService
    ){
      this.resumeId = this.data ? this.data : null
      this.link = 'http://localhost:4200/resume/view/' + this.resumeId.resumeId
    }

    copy(){
      this.clipBoard.copyFromContent(this.link)
      this.alertService.success('Link Copied successfully')
    }
}
