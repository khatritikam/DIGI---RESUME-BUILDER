import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Resume } from 'src/app/models/resume.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements AfterViewInit {

    public isUploaded = false;
    public isSelected = false;
    public loading = false
    public selectButtonIcon = 'add';
    public file:File;
    public MAX_IMAGE_SIZE = 2 * 1000 * 1000;
    public url = '';
    @ViewChild('fileInput') fileInput:ElementRef;
    @ViewChild('previewImg') previewImg:ElementRef;
    @Input() resume:Resume  

    constructor(
      private alertService:AlertService,
      private resumeRepo: ResumeRepository
    ){
        this.init()
    }

    ngAfterViewInit(): void {
      this.init()  
      }

    init(){
        if(this.resume){
      this.isUploaded = !!this.resume.image_url
      if(this.isUploaded){
        this.isSelected = true
        this.url = this.resume.image_url
      }
    }
    }
    
    onImageSelect(value: any){
     const file = value.target.files[0]
     this.file = file
     if(this.file.size > this.MAX_IMAGE_SIZE){
        return this.alertService.error('File Size Should Be Less Than 2MB')
     }
     if(file.type === 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/JPG'){
        this.isSelected = true
        this.selectButtonIcon = 'cached'
        this.previewImg.nativeElement.src = window.URL.createObjectURL(this.file)
     }else{
      return this.alertService.error('Image must be of type png, jpg or jpeg')
     }
    }

    onFileSelect(){
     this.fileInput.nativeElement.click();
    }

    saveImg(){
      this.loading = true
      this.resumeRepo.saveOrUpdateImage(this.file, this.resume._id).subscribe(data => {
        this.loading = false
        this.isUploaded = true
        this.url = data.image_url
        this.alertService.success('Image uploaded successfully')
      }, error =>{
        this.loading = false
      })
    }

    deleteImg(){
      this.loading = true
      this.resumeRepo.deleteImage(this.resume._id).subscribe(data => {
        this.loading = false
        this.alertService.success('Image Deleted Successfully');
        this.isUploaded = false
        this.isSelected = false
        this.url =''
      }, error =>{
        this.loading = false
      })
    }
}
