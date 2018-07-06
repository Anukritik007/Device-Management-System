import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Http } from '@angular/http';
import {AuthService} from '../auth.service';
import {Employee} from '../Classes/Employee';
import { LocalStorageService} from '../LocalStorageService';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  template:`Chatbot Data:
  <br>
  Your Token Is : {{displaytoken}}
  <br><br>

  <ul>
      <li> "ngFor="let e of employee"
        {{e.Id}}    {{e.Name}}
        </li>

  </ul>
  
  
  `

})
export class ChatbotComponent implements OnInit {

  constructor(private router:Router ,private authService:AuthService,
  private localstorageservice:LocalStorageService) {  }

  logout()
    {
        
      
        this.router.navigate(['']);
    }

 chatbottoken:string;
 Employee:Employee[];
  ngOnInit() {
    //this.chatbottoken=this.authService.AccessToken;
    this.chatbottoken=this.localstorageservice.GetValueFromLocalStorage().access_token;
    this.authService.getEmployeeByhttpclient()
    .subscribe(
      data =>
      {
        this.Employee=data;
      }
    )
    }


  }