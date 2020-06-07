import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenParms } from './TokenParms';
import { Observable } from 'rxjs';
import { User } from './Model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenAPI='http://localhost/EmpService/api/login';
  AccessToken:string="";
  constructor(private http:HttpClient) { }

  login(user:string,password:string):Observable<User>{
    console.log("Login Start");
    var headersforAPI=new HttpHeaders({"Content-Type":'application/json'});
    var data={"Username":user,"Password":password};
 var result= this.http.post<User>(this.tokenAPI,data,{ headers: headersforAPI});
  return result;

   // return this.http.get<Emp[]>(this.serviceurl).pipe(map(data=>data));
    // .catch(this.handleError));
    
}
}
