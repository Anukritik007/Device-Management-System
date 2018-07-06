import { Injectable} from '@angular/core';
import {TokenParams} from './Classes/TokenParams';

@Injectable()
export class LocalStorageService
{
    public SetAuthorizationData(auth : TokenParams):void{
        localStorage.setItem("Authorisation",JSON.stringify(auth))

    }
    public GetValueFromLocalStorage():TokenParams{
        let tokendata=JSON.parse(localStorage.getItem("Authorisation"));
        return tokendata==null ? null:tokendata;
    }
}