import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenParms } from './TokenParms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenAPI='http://localhost:51067/api/login';
  AccessToken:string="";
  constructor(private http:HttpClient) { }

  login(user:string,password:string):Observable<string>{
    var headersforAPI=new HttpHeaders({"Content-Type":'application/x-www-form-urlencoded'});
    var data="grantType=password&username="+'admin'+"&password=admin";
 return this.http.post<string>(this.tokenAPI,data,{ headers: headersforAPI});

   // return this.http.get<Emp[]>(this.serviceurl).pipe(map(data=>data));
    // .catch(this.handleError));
    
}
}
