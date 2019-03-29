import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {

  constructor(private httpClient: HttpClient) { }

  getImage(term: string): Observable<any>  {
    return this.httpClient.get('https://api.unsplash.com/search/photos', {
        headers : {
            Authorization: 'Client-ID 562d4066f1d17762ddb6d6a6512b26445a14b8ffa19d67d6d946af88d2e265a1'
          },
          params: {
            query: term
          }
        });
  }
}
