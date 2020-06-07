import { Injectable } from '@angular/core';
import { Emp } from '../app/emp';
import {HttpClient} from '@angular/common/http';
import {  Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  private serviceurl = "http://localhost/EmpService/Employee"; 
  constructor(private http:HttpClient) { }

  getEmployeeAsync():Observable<Emp[]>{
    console.log("Geet Emp");
    return this.http.get<Emp[]>(this.serviceurl).pipe(
      catchError(this.handleError<Emp[]>('getEmp', []))
    );;
   // return this.http.get<Emp[]>(this.serviceurl).pipe(map(data=>data));
    // .catch(this.handleError));
    
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.log('error');
   return  Observable.throw(error.json().error || 'Server Error')
    
  };
}
  getEmployee():Observable<Emp[]>{
    return this.http.get<Emp[]>(this.serviceurl);
   // return this.http.get<Emp[]>(this.serviceurl).pipe(map(data=>data));
    // .catch(this.handleError));
    
}
  
}
