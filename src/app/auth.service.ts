import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers,Http,HttpModule} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import {TokenParams} from './Classes/TokenParams';

@Injectable()
export class AuthService{
    AccessToken:string="";
    constructor(private http:Http){}

    private TokenAPI='http://httpbin.org/post';

//     login(Username:string,Password:string):Observable<TokenParams>
//     {
//         var headersForTokenAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
//         var data="grant_type=password&username=" +Username + "&password="+Password;

//         return this.http.post(this.TokenAPI,data,{headers:headersForTokenAPI})
//         .map(res => res.json());
//     }
}