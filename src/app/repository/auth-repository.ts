import { Injectable } from "@angular/core";
import { ApiService } from "../services/api.service";
import { Store } from "@ngrx/store";
import { Observable, combineLatest, map, take } from "rxjs";
import { User } from "../models/user";
import { LoginRequestAction, LoginSuccessAction, LogoutAction, UserProfileRequestAction, UserProfileSuccessAction, UserUpdateAction } from "../actions/user-actions";
import { RootReducerState, getUser, userLoggedIn, userLoggingIn } from "../reducers";
import { AuthUtilsService } from "../utility/auth-utils.service";


@Injectable()
export class AuthRepository {
  constructor(private apiService: ApiService, private store: Store<RootReducerState>) {
  }

  login(data: { email: string, password: string }): Observable<User> {
    this.store.dispatch(new LoginRequestAction());
    this.apiService.loginAndSetToken(data).subscribe(res => {
      this.store.dispatch(new LoginSuccessAction(res));
    });
    return this.store.select(getUser);
  }

  signup(data: {
    email: string, password: string, confirm_password: string,
    name: string, job_category: string, experience_level: string
  }): Observable<User> {
    return this.apiService.singup(data);
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.apiService.sendResetPasswordEmail(data);
  }

  resetPassword(data: { code: string, new_password: string, confirm_password: string }): Observable<User> {
    return this.apiService.resetPassword(data);
  }

  fetchMe(force = false): Observable<User> {
    const loggedIn$ = this.store.select(userLoggedIn);
    const loggingIn$ = this.store.select(userLoggingIn);
    const user$ = this.store.select(getUser);
    combineLatest([loggedIn$, loggingIn$, user$]).pipe(take(1)).subscribe(data => {
      if (!data[0] && !data[1] || force) {
        this.store.dispatch(new UserProfileRequestAction());
        this.apiService.fetchMe().subscribe(user => {
          this.store.dispatch(new UserProfileSuccessAction(user));
        });
      }
    });
    return user$;
  }

  logout(){
    AuthUtilsService.removeAuthToken();
    this.store.dispatch(new LogoutAction());
  }

  updateProfile(data: any) {
    const userProfile = {...data, ...{job_category: 'abc', experience_level: 'ads'}};
    return this.apiService.updateUserProfile(userProfile)
      .pipe(map((res) => {
        this.store.dispatch(new UserUpdateAction(res));
      }));
  }

  updatePassword(data: any) {
    return this.apiService.updatePassword(data);
  }
}
