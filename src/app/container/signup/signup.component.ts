import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signupForm: FormGroup;
  loading = false;

  constructor(private authRepository: AuthRepository, private alterService: AlertService, private router: Router) {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      job_category: new FormControl(null, [Validators.required]),
      experience_level: new FormControl(null, [Validators.required]),
    });
  }

  signup(){
    this.loading = true;
    this.authRepository.signup(this.signupForm.value).subscribe((data) =>{
      this.loading = false;
      this.alterService.success('SignUp Successful');
      this.router.navigate(['login']);
    }, (error) =>{
      this.loading = false;
    });
  }

  login(){
    this.router.navigate([''])
  }
}
