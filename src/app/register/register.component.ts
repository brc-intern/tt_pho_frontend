import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user= new User();
  msg='';
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registeruser(){
    this.service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this.router.navigate(['/login'])
      },
      error =>{
        console.log("exception occured");
        this.msg=error.console.error();   
      }
    )
  }

}
