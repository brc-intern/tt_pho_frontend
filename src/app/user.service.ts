import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllListProduct():Observable<any>{
    return this.http.get("http://localhost:8080/product/getallproduct");
  }
  getAllListKindProduct():Observable<any>{
    return this.http.get("http://localhost:8080/kindproduct/getallkind");
  }
  getProductById(id: any):Observable<Product>{
    return this.http.get<Product>("http://localhost:8080/product/getproduct/"+`${id}`);
  }
  updateProduct(id: number, data: any): Observable<any> {
    return this.http.put("http://localhost:8080/product/update/"+`${id}`,data);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/product/delete/"+`${id}`, { responseType: 'text' });
  }

  findByName(name:any): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/product/getallproduct?name="+`${name}`);
  }

  createProductFromRemote(product: Product): Observable<any>{
    return this.http.post("http://localhost:8080/product/create",product);
  }

  loginUserFromRemote(user: User): Observable<any> {
    return this.http.post<any>("http://localhost:8080/login", user);
  }

  registerUserFromRemote(user: User): Observable<any>{
    return this.http.post("http://localhost:8080/registeruser",user);
  }


  logOut() {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('roles');
  }
  isUserLoggedIn() {
    
      let user = sessionStorage.getItem('user')
      console.log(!(user === null))
      return !(user === null)
    

  }
  isAdmin() {
    let admin = sessionStorage.getItem('roles')
    console.log((admin === "admin"))

    return (admin === "admin")
  }
}
