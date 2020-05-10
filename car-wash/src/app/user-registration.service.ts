import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }
 
  public doRegistration(user){
    return this.http.post("http://localhost:8585/register",user,{responseType:'text' as 'json'});
  }

  public doLogin(login){
    return this.http.post("http://localhost:8585/login",login,{responseType:'text' as 'json'});
  }

  public doForgot(forgot){
    return this.http.post("http://localhost:8585/forgotpassword",forgot,{responseType:'text' as 'json'});
  }

  
}
