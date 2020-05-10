import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../user-registration.service';
import { Forgot } from '../forgot';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  forgot : Forgot = new Forgot();
  message:any;
  res:any;

  constructor(private service:UserRegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  public forgotNow(){
    let resp =  this.service.doForgot(this.forgot);
    resp.subscribe((data) => this.message= data);
    //this.router.navigate(['/home']);      
  
  }

}
