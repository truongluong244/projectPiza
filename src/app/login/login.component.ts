import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:any=  FormGroup;
  users:any = [];
  constructor(private fb:FormBuilder, private router:Router, private commonService:CommonService) {

   }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.commonService.getUser().subscribe((data:any) => {
      this.users = data;
     } )

  }

  onLogin(){
    if(this.loginForm.value.name){

     this.users.forEach((item:any ) => {
      if(item.name === this.loginForm.value.name && item.password === this.loginForm.value.password) {
        localStorage.setItem("isLoggedIn", 'true');
        this.router.navigate([''])
      }
      else {
        localStorage.clear();
      }
     });
    }
  }

}
