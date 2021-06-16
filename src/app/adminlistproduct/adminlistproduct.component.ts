import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminlistproduct',
  templateUrl: './adminlistproduct.component.html',
  styleUrls: ['./adminlistproduct.component.css']
})
export class AdminlistproductComponent implements OnInit {

  product : Product[];
  currentProduct ?: Product;
  currentIndex = -1;
  name='';

  constructor( 
    private service: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.reloadData();
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
  setActiveProduct(product: Product, index: number): void{
    this.currentProduct = product;
    this.currentIndex = index;
  }

  deleteProduct(id: number){
    this.service.deleteProduct(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }
  searchName():void{
    this.currentProduct = undefined;
    this.currentIndex = -1;

    this.service.findByName(this.name).subscribe(
      data => {
        this.product = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  selectUpdate(id: number){
    this.router.navigate(['update', id])
  }
}
