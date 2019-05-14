import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';
import { AuthService } from '../auth.service';
import { TokenParms } from '../TokenParms';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   emplist:Emp[];
   emp:Emp;
   token:string;
  constructor(private empservice: EmployeeService,private authService:AuthService,private localstorage:LocalStorageService) { }

 
  loadEmployee(){
    
    this.empservice.getEmployee().subscribe(data=>{ 
      this.emplist=data;
    });
  
  }

  login(){
    this.authService.login('admin','admin').subscribe(data=>{       
      this.localstorage.SetToken(data);      
    });
  
  }
  ngOnInit() {
    this.login();    
  }

}
