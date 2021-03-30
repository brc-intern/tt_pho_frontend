import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username :string;
  constructor(public service: UserService){
    if(sessionStorage.getItem('user') != null){
      this.username=sessionStorage.getItem('user');
    }else{
      this.username= '{}'
    }
   
  }

  title = 'AngularCoffee';

}
