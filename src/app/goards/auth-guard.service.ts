import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthUtilsService } from '../utility/auth-utils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router
  ){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
   if(!!AuthUtilsService.getAuthToken()){
    return true
   }else{
      this.router.navigate([''])
   }
  }
}
 