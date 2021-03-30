import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  msg = '';
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  loginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      async data => {
        sessionStorage.setItem('user',data.username)

        let user = sessionStorage.getItem('user')

        sessionStorage.setItem('roles',data.role)
        let roles = sessionStorage.getItem('roles')
        console.log(roles)
        console.log(user)
        console.log("reponse recieved"),
        this.router.navigate(['/home']);
        window.location.reload(await this.router.navigate(['/home']));   
      },
      error => {
        console.log("exception occured"),
        this.msg="Bad credentials, please enter valid emailId and password"

      }
    )
  }
}
