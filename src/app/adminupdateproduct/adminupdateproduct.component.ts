import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { UserService } from '../user.service';

@Component({
  selector: 'app-adminupdateproduct',
  templateUrl: './adminupdateproduct.component.html',
  styleUrls: ['./adminupdateproduct.component.css']
})
export class AdminupdateproductComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private service: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.product = new Product();

    this.id = this.route.snapshot.params['id'];
    this.service.getProductById(this.id).subscribe(
      data => {
        console.log(data);
        this.product = data;
      },
      error => {
        console.log("ERROR"+ error);
      }
    )
  }
  updateProduct(): void{
    this.service.updateProduct(this.id, this.product).subscribe(
      data => {
        console.log(data);
        this.product = new Product();
        this.router.navigate(['/adminlistproduct']);
      },
      error => {
        console.log("ERROR"+ error);
      }
    )
  }

}
