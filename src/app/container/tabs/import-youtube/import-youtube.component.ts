import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Resume } from 'src/app/models/resume.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-import-youtube',
  templateUrl: './import-youtube.component.html',
  styleUrls: ['./import-youtube.component.scss']
})
export class ImportYoutubeComponent implements AfterViewInit{

  public youtubeForm:FormGroup;
  public isVideoUploaded = false;
  public uploadAgain = false;
  public loading = false
  public YOUTUBE_REGEX = '^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.' +
    'com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|v\\/)?)([\\w\\-]+)(\\S+)?$';
  @Input() resume:Resume;

    ngAfterViewInit(): void {
      this.isVideoUploaded = !!this.resume.video_url
    }

    constructor(
      private resumeRepo: ResumeRepository,
      private alertService:AlertService
    ){
      this.youtubeForm = new FormGroup({
        video_url : new FormControl(null, [Validators.required, Validators.pattern(this.YOUTUBE_REGEX)])
      })
    }

    uploadVideo(){
      this.loading = true
      throw this.resumeRepo.addVideo(this.resume._id, this.youtubeForm.value).subscribe(data => {
        this.loading = false
        const message = this.isVideoUploaded ? 'Video Updated Successfully':'Video Uploaded Successfully'
        this.isVideoUploaded = true
        this.alertService.success(message)
      },error =>{
        this.loading = false
        console.log(error)
      })
    }
}
