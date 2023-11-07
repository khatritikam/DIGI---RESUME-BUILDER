import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure.model';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';
import { IndustrialExposureFormComponent } from '../../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-industrial-exposure-card',
  templateUrl: './industrial-exposure-card.component.html',
  styleUrls: ['./industrial-exposure-card.component.scss']
})
export class IndustrialExposureCardComponent {

  @Input() industrialExposure: IndustrialExposure;
  @Input() resumeId: string;

  constructor(
    private dialog: MatDialog, 
    private resumeRepo: ResumeRepository, 
    private alertService: AlertService) {
  }

  edit() {
    this.dialog.open(IndustrialExposureFormComponent, {
      width: '90%', height: '90%',
      disableClose: true,
      data: {industrialExposure: this.industrialExposure,resumeId: this.resumeId}
    });
    
  }

  delete() {
    this.resumeRepo.deleteIndustrialExposure(this.resumeId, this.industrialExposure._id)
      .subscribe(data => {
        this.alertService.success('industrialExposure deleted Successfully');
      });
  }
}
