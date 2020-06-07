import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { LocalStorageService } from '../local-storage.service';
import {Router} from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService,private localstorage:LocalStorageService,private router:Router) { }
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }

  login(email:string,password:string){  
    this.authService.login(email,password).subscribe(data=>{       
      this.localstorage.SetToken(data.token);             
    });
    // if(this.localstorage.GetToken("token")==""){

    // }
    this.router.navigateByUrl('/emplist');   
}
}
