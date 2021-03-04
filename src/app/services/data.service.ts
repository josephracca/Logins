import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { ILogin } from '../interface/ILogin';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = "https://csa2020studentapi.azurewebsites.net/auth/login"
  //this si the service that Angel created...()

  private userOBJ: ILogin = {
    userName: "",
    password:""
  }

  constructor(private http: HttpClient) { }

  //start skeleton of http post request

  signIn(loginOBJ) {
    console.log(loginOBJ)
    this.http
      .post(this.url, loginOBJ)
      .subscribe(data => {
        console.log(data)

      })
  }

  setOBJ(object: ILogin):void{
    
  }
}
