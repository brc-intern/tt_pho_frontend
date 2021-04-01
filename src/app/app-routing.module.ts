import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdmincreateproductComponent } from './admincreateproduct/admincreateproduct.component';
import { AdminlistproductComponent } from './adminlistproduct/adminlistproduct.component';
import { AdminupdateproductComponent } from './adminupdateproduct/adminupdateproduct.component';
import { HomeComponent } from './home/home.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { SucessloginComponent } from './sucesslogin/sucesslogin.component';


const routes: Routes = [
  {
    path:'login', component: LoginComponent
  },
  {
    path:'home', component: HomeComponent
  },
  {
    path:'', component: HomeComponent
  },
  {
    path:'logout', component: LogoutComponent
  },
  {
    path:'loginsuccess', component: SucessloginComponent
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path:'listproduct', component: ListproductComponent
  },
  {
    path:'adminlistproduct', component: AdminlistproductComponent
  },
  {
    path:'createproduct', component: AdmincreateproductComponent
  },
  {
    path:'update/:id', component: AdminupdateproductComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
