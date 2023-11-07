import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthUtilsService } from '../utility/auth-utils.service';
import { filter, map, take } from 'rxjs';
import { AuthRepository } from '../repository/auth-repository';

@Injectable({
  providedIn: 'root'
})
export class AnonGuardService  implements CanActivate{

  constructor(
      private router:Router,
      private authRepo:AuthRepository
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
      if(!AuthUtilsService.getAuthToken()){
        return true
      }else{
        const user$ = this.authRepo.fetchMe()
         return user$.pipe(
          filter(data=> !!data),
          map (data =>{
          if(!data.verified){
            this.router.navigate(['verify'])
          } else if(data.onboarding !== 200){
            this.router.navigate(['on-boarding'])
          } else{
            this.router.navigate(['dashboard','resume']);
          }
         }))
      }
  }
}
