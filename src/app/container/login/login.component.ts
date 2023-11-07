import { Component, OnDestroy, Pipe } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, takeWhile } from 'rxjs';
import { AuthRepository } from 'src/app/repository/auth-repository';
import { AlertService } from 'src/app/services/alert.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy{

  loginForm: FormGroup;
  loading = false;
  isAlive = true

  constructor(
    private authRepository: AuthRepository, 
    private alterService: AlertService, 
    private router: Router
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(8)]),
    });
  }

  ngOnDestroy(): void {
    this.isAlive = false
  }

  login() {
    this.loading = true;
     this.authRepository.login(this.loginForm.value).pipe(takeWhile(()=>this.isAlive), 
     filter(res =>!!res)).subscribe((data) => {
      this.loading = false;
      this.alterService.success('login Successful');
      this.router.navigate(['verify'],{queryParams: {email:data.email}})
    }, (error) => {
      this.loading = false;
    });
  }

  signup() {
    this.router.navigate(['signup']);
    // we are using this navigate to change our route

  }

}
