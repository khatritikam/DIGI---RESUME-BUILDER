import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-on-boarding-intro',
  templateUrl: './on-boarding-intro.component.html',
  styleUrls: ['./on-boarding-intro.component.scss']
})
export class OnBoardingIntroComponent {

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['on-boarding', 'add']);
  }
}
