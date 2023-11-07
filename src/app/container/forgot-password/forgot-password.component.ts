import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  loading = false 
  forgotPasswordForm:FormGroup
  isEmailSent = false

  constructor(
    private authRepository: AuthRepository,
    private alertService: AlertService,
    private router:Router
  ){
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(null, !this.isEmailSent ? [Validators.required] : []),
      code: new FormControl(null, []),
      new_password: new FormControl(null, []),
      confirm_password: new FormControl(null, []),
    })
  }

  sendEmail(){
    this.loading = true
    // this.authRepository.sendResetPasswordEmail(this.forgotPasswordForm.value).subscribe((data) =>{
    //   console.log(data)
      
    // },(error =>{
    //   this.loading = false
    // }))
    this.loading = false
    this.isEmailSent = true
    this.alertService.success('Email has been sent successfully')
    this.forgotPasswordForm.get('code')?.setValidators([Validators.required]); 
    this.forgotPasswordForm.get('new_password')?.setValidators([Validators.required]); 
    this.forgotPasswordForm.get('confirm_password')?.setValidators([Validators.required]);
   
  }

  changePassword(){
    this.loading = true
   this.authRepository.resetPassword(this.forgotPasswordForm.value).subscribe((data)=>{
    this.loading = false
    this.router.navigate(['login']);
      this.alertService.success('Password Updated Successfully');
   },(error =>{
       this.loading = false
     }))
  }
}
