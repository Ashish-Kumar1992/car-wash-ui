import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgotComponent } from './forgot/forgot.component';



const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
   {path:"register",component:RegistrationComponent},
   {path:"login",component:LoginComponent},
   {path:"forgot",component:ForgotComponent},
   {path:"home",component:HomeComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
