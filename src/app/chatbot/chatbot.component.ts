import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Http } from '@angular/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css'],
  template:`Chatbot Data:
  <br>
  Your Token Is : {{displaytoken}}
  `

})
export class ChatbotComponent implements OnInit {

  constructor(private router:Router ,private authService:AuthService) {  }

  logout()
    {
        
      
        this.router.navigate(['']);
    }

 chatbottoken:string;
  ngOnInit() {
    this.chatbottoken=this.authService.AccessToken;

  }

}
