import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs';
import { Resume } from 'src/app/models/resume.model';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.scss']
})
export class OnBoardingComponent implements OnInit, OnDestroy {

  public resume: Resume; 
  public isFirstStepCompleted = false;
  public loading = false;
  public isAlive = true;

  constructor(
    private resumeRepo: ResumeRepository,
    private router: Router
    ) {
   
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  ngOnInit() {
    this.loading = true;
    const observer$ = this.resumeRepo.fetchAllResumes();
    const resume$ = observer$[2];
    resume$.pipe(takeWhile(() => this.isAlive)).subscribe(data => {
      this.loading = false;
      if (data.length) {
        this.resume = data[0];
        this.isFirstStepCompleted = true;
      }
    });
  }

  finish() {
    this.resumeRepo.updateOnBoarding({onboarding: 200}).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }

}
