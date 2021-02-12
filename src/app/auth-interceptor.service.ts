import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request on its way::::::::');

    /*HANDLING REQUEST INTERCEPTORS*/
    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'test')
    });
    // return next.handle(modifiedRequest)

    /*HANDLING RESPONSE INTERCEPTORS*/
    return next.handle(modifiedRequest)
      .pipe(
        tap(event => {
          if (event.type === HttpEventType.Response) {
            console.log('Response Arrived:::', event.body);
          }
        })
      );
  }
}
