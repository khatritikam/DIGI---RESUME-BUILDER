import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRepository } from 'src/app/repository/auth-repository';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
    
  constructor(
    private authRepo:AuthRepository,
    private router:Router
  ){
    this.authRepo.logout();
    this.router.navigate([''])
  }
}
