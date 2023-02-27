import {Injectable} from '@angular/core';
import {HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      url: `https://free-nba.p.rapidapi.com/${req.url}`,
      headers: req.headers.set('X-RapidAPI-Key', '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX')
      .set('X-RapidAPI-Host', 'free-nba.p.rapidapi.com')
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
