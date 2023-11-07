import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { AlertService } from './alert.service';
import { ApiService } from './api.service';
import { AuthUtilsService } from '../utility/auth-utils.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseURL = 'http://localhost:3000/api'

  constructor(
    private httpClient : HttpClient,
    private alertService : AlertService,
    private router:Router
  ) { }

  get(url:string, paramData?:any):Observable<any> {
    const data = {params: paramData, headers: this.getAuthHeaders() };
    return this.httpClient.get(this.baseURL + url, data).pipe(catchError(this.errorHandler.bind(this)))
  }

  post(url: string, body: any, isArrayBuffer = false): Observable<any> {
    const options: any = isArrayBuffer ? {
      headers: this.getAuthHeaders(), responseType: 'arraybuffer',
    } : {headers: this.getAuthHeaders()};
    return this.httpClient.post(this.baseURL + url, body, options).pipe(catchError(this.errorHandler.bind(this)));
  }

  patch(url: string, body: any): Observable<any>{
    return this.httpClient.patch(this.baseURL + url, body,{headers:this.getAuthHeaders()}).pipe(catchError(this.errorHandler.bind(this)));
  }

  private getAuthHeaders(){
    return{
      Authorization:`Bearer ${AuthUtilsService.getAuthToken( )}`
    }
  }

  delete(url:string,body?:any):Observable<any>{
    return this.httpClient.request('delete', this.baseURL + url, {body,headers:this.getAuthHeaders()})
  }

  private errorHandler(response: any) {
    const error = response.error;
    const keys = Object.keys(error);
    const key = keys[0];
    const message = response.message;
    const status = response.status;
    if (status === 401) {
     this.router.navigate(['logout']);
     this.alertService.message('Session Expired')
    }
    if (key === 'isTrusted') {
      this.alertService.error('Please connect to internet Connection');
    } else {
      this.alertService.error(message);
    }
    return throwError({message, error});
  }
}
