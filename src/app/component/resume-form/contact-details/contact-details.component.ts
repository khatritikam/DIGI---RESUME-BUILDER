import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Contact, Resume } from 'src/app/models/resume.model';
import { ContactDetailsFormComponent } from '../resume-dialogues/contact-details-form/contact-details-form.component';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  @Input() contactDetails:Contact;
  @Input() resumeId:string

  constructor(
    private matDialog:MatDialog
  ){}

  opneContactForm(){
    this.matDialog.open(ContactDetailsFormComponent,{
      width:'90%',height:'90%', data:{contactDetails:this.contactDetails,resumeId:this.resumeId}
    })
  }
}
