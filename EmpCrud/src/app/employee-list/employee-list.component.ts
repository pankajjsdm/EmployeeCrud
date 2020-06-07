import { Component, OnInit } from '@angular/core';
import { Emp } from '../emp';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   emplist:Emp[];
   emp:Emp;
   token:string;
  constructor(private empservice: EmployeeService) { }
 
  loadEmployee(){
    this.empservice.getEmployee().subscribe(data=>{ 
      this.emplist=data;
    });
  
  }

  // login(){
  //   this.authService.login('pankajjsdm','test@123').subscribe(data=>{       
  //     this.localstorage.SetToken(data.token);
  //    // console.log(data.userName);      
  //   });

  
 // }
  ngOnInit() { 
    this.loadEmployee();   
    // console.log("Login On Init");
    // this.login();    
 }

}
