import { Injectable} from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {LocalStorageService} from './../LocalStorageService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor (private localstorageservice:LocalStorageService){}
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable <HttpEvent<any>>
    {    console.log("Hii,I'm Interceptor");
        console.log(req);

        if (req.url.indexOf("/Token")>0)
        {
            var headersForTokenAPI = new HttpHeaders({"content-Type":"application/x-www-form-urlencoded"});
            return next.handle(req);
        }

        var tokendata=this.localstorageservice.GetValueFromLocalStorage();
        var authHeader= 'Bearer' + tokendata.access_token;
        const authReq= req.clone({setHeaders:{Authorization:authHeader}});
        
        return next.handle(authReq);
    }
}