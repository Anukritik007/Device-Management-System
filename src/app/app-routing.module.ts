import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{ChatbotComponent} from './chatbot/chatbot.component'

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'chatbot',
    component:ChatbotComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
