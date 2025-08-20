import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('INTERCEPTOR working');

   const reqClone = request.clone({
    setHeaders : {
      'Auth' : 'Bearer from ls',
      'Content-Type' : 'application/json'
    }
   })
    return next.handle(reqClone);
  }
}
