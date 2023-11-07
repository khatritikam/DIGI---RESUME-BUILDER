import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthUtilsService {

  private static authToken = 'auth token'

  static getAuthToken(){
    return localStorage.getItem(AuthUtilsService.authToken)
 }

 static setAuthToken(value: any){
     localStorage.setItem(AuthUtilsService.authToken, value)
 }

 static removeAuthToken(){
     localStorage.removeItem(AuthUtilsService.authToken)
 }
  
}
