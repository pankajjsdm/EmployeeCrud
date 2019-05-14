import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public SetToken(auth:string):void{
  localStorage.setItem("Auth",auth);
  }
  public GetToken():string{
    return localStorage.getItem("Auth");
    }
}
