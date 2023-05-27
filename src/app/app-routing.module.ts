import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import{UserlistingComponent} from './userlisting/userlisting.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatepopupComponent } from './updatepopup/updatepopup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'userlisting',component:UserlistingComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'updatepopup',component:UpdatepopupComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
