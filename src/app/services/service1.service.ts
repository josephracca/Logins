import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service1Service {
  private url = "https://dog.ceo/api/breeds/image/random";


  // constructor(private http: HttpClient) { }

  // GetAPIInfo(): Observable<any> {
  //   return this.http.get(this.url)
  // }
}
