import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs';
import { User } from 'src/app/models/user';
import { user } from 'src/app/reducers/user-reducer';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.scss']
})
export class ProfileSettingsComponent implements OnInit,OnDestroy{
  form: FormGroup;
  isAlive = true;
  user: User;

  constructor(private authRepo:AuthRepository){}

  ngOnDestroy(): void {
    this.isAlive = false
  }

  ngOnInit() {
    this.initUser();
    const name = this.user ? this.user.name : null;
    this.form = new FormGroup({
      name: new FormControl(name, [Validators.required]),
    });
  }

  initUser(){
    this.authRepo.fetchMe().pipe(takeWhile(() =>this.isAlive)).subscribe(user => {
      this.user = user;
    });
  }

  update(){
      this.authRepo.updateProfile(this.form.value).pipe(takeWhile(() => this.isAlive))
      .subscribe(data => {
      });
  }
}
 