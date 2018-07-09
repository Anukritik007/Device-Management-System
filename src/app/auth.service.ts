import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Headers,Http,HttpModule} from '@angular/http';
import {HttpHeaders} from '@angular/common/http';
import {TokenParams} from './Classes/TokenParams';
import {Employee} from './Classes/Employee';
import {LocalStorageService} from './LocalStorageService';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService{
    AccessToken:string="";
    constructor(private http:Http, 
        private localstorageservice:LocalStorageService,
        private httpclient:HttpClient)
    {}

    private TokenAPI='http://8d72bf82.ngrok.io/HELLO';
    private EmployeeAPI='';

    login(Username:string,Password:string):Observable<TokenParams>
    {
        var headersForTokenAPI = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
        var data="grant_type=password&username=" +Username + "&password="+Password;

        return this.http.post(this.TokenAPI,data)
        .map(res => res.json());
        
    }

    loginbyhttpclient(Username:string,Password:string):Observable<TokenParams>
    {
        //var data ="grant_type=password&username=" +Username + "&password="+Password;
        var data="hello how r";
        return this.httpclient.post<TokenParams>(this.TokenAPI,data);
    }



    getEmployee():Observable<Employee[]>
    {
        var HeadersForEmployeeAPI = new Headers();

    HeadersForEmployeeAPI.append('Authorization','Bearer'+this.localstorageservice);
        return this.http.get(this.EmployeeAPI,{headers:HeadersForEmployeeAPI}).map(res=>res.json());
    }

    getEmployeeByhttpclient():Observable<Employee[]>{
        return this.httpclient.get<Employee[]>(this.EmployeeAPI);
    }
}