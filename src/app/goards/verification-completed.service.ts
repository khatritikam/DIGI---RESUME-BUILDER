import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api.service';
import { filter, map, take } from 'rxjs';
import { AuthRepository } from '../repository/auth-repository';

@Injectable({
  providedIn: 'root'
})
export class VerificationCompletedService implements CanActivate {

  constructor(
    private authRepo:AuthRepository,
    private router:Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return this.authRepo.fetchMe().pipe(
      filter(data => !!data),
      map(data=>{
      if(data.verified){
        return true
      }else{
       return this.router.navigate(['verify'])
        
      }
    }))
  }
}
