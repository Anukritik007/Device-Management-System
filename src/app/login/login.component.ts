import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'
import {TokenParams} from '../Classes/TokenParams';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit 
{
   
  tokenParam: TokenParams;
  username:string;
  password:string;

  constructor(private router:Router ,
    private authService:AuthService)
   {}


   onSubmit(value:any)
    {
        
        console.log(value)
        
        // this.authService.login(this.username,this.password)
        //   .subscribe(
        //     data =>
        //        {
        //           this.tokenParam=data;
        //           this.authService.AccessToken =this.tokenParam.access_token;
                  this.router.navigate(['chatbot']);
        //        }
        //   )
    }

  ngOnInit() {
  }

}
