import { Component, OnInit } from '@angular/core';
import { KindProduct } from '../kindproduct';
import { Product } from '../product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  product : Product[];
  kind : KindProduct[];
  constructor( private service: UserService) { }

  ngOnInit(): void {
    this.reloadData();
    this.reloadKind();
  }

  reloadData(){
    this.service.getAllListProduct().subscribe(
      data => {
        this.product = data;
        console.log(data);
      },
      error => {
        console.log('ERROR'+ error);
      }
    )
  }

  reloadKind(){
    this.service.getAllListKindProduct().subscribe(
      data => {
        this.kind = data;
        console.log(data);
      },
      error => {
        console.log('ERROR'+error);
      }
    )
  }
  Check(){
     
  }
}
