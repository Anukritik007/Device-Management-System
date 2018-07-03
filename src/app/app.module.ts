import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AuthService } from './auth.service';
import {Http,HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
