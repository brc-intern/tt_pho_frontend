import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { SucessloginComponent } from './sucesslogin/sucesslogin.component';
import { RegisterComponent } from './register/register.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { AdminlistproductComponent } from './adminlistproduct/adminlistproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LogoutComponent,
    SucessloginComponent,
    RegisterComponent,
    ListproductComponent,
    AdminlistproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
