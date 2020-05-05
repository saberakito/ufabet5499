import {  Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SetHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const newRequest = req.clone({
            headers: req.headers.set(
                'Authorizition',
                'token-here'
            )
        });

       // console.log(newRequest);
      // console.log(newRequest.body);
        return next.handle(newRequest);
    }
}