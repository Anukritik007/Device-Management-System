import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { AuthService } from './auth.service';
import {Http,HttpModule} from '@angular/http';
import {LocalStorageService} from './LocalStorageService';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './Interceptors/AuthInterceptor';
import { HttpClientModule,HttpClient} from '@angular/common/http';

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
    HttpModule,
    HttpClientModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi:true,
    },
    
    AuthService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
