import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';
import { Login } from '../login';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();
  message:any;
  res:any;

  constructor(private service:UserRegistrationService,private router: Router) { }

  ngOnInit(): void {
  }


  public loginNow(){
    let resp =  this.service.doLogin(this.login);
    resp.subscribe((data) => this.message= data);
    this.router.navigate(['/home']);      
  
  }

}
