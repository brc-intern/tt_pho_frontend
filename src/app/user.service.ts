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

  deleteProduct(id: number): Observable<any> {
    return this.http.delete("http://localhost:8080/product/delete/"+`${id}`, { responseType: 'text' });
  }

  findByName(name:any): Observable<Product[]>{
    return this.http.get<Product[]>("http://localhost:8080/product/getproduct?name="+`${name}`);
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
    let admin = sessionStorage.getItem('roless')
    console.log((admin === "admin"))

    return (admin === "admin")
  }
}
