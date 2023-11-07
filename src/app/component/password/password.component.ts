import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit, OnDestroy{

  form: FormGroup;
  isAlive = true;
  
  constructor(private authRepo: AuthRepository) {
  }
  ngOnInit() {
    this.form = new FormGroup({
      old_password: new FormControl(null, [Validators.required]),
      new_password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirm_password: new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  ngOnDestroy() {
    this.isAlive = false;
  }
  updatePassword() {
    this.authRepo.updatePassword(this.form.value)
      .pipe(takeWhile(() => this.isAlive)).subscribe(data => {
    });
  }
}
