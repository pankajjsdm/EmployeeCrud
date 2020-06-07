import {HttpInterceptor, HttpRequest,HttpHandler, HttpEvent,HttpHeaders  } from '@angular/common/http';
import{Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthIntercepter implements HttpInterceptor
{
    constructor(private localstorageService:LocalStorageService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       // console.log('In Intercepter');
        var token=this.localstorageService.GetToken();
        
        if(req.url=='http://localhost/EmpService/api/login'){

        
      //  if(token){
           console.log('Login Intercept nexthandle ');
            return next.handle(req);
         }
        else{
          const authReq = req.clone({
            setHeaders:{
              Authorization:'Bearer '+token
            }
            // headers: req.headers.set('Authorization', 'Bearer'+token)
          });
          console.log(authReq);
          //   req = req.clone({
          //       Headers : httpOptions,
          //     });
            return next.handle(authReq);
        }
       // var authHeader='Bearer'+token;
       
    }


}
