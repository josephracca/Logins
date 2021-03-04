import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ILogin } from '../interface/ILogin';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string = "https://csa2020studentapi.azurewebsites.net/auth/login"
  //this si the service that Angel created...()

  private userOBJ: ILogin = {
    userName: "",
    password: ""
  }

  constructor(private http: HttpClient, private route: Router) { }

  //start skeleton of http post request

  signIn(loginOBJ) {
    console.log(loginOBJ)
    this.http
      .post(this.url, loginOBJ)
      .subscribe(data => {
        console.log(data)
        this.setOBJ(loginOBJ);
        //how we actually route, string form of route, needs to match one-for-one to the app-routing module route
        this.route.navigate(["main"])
      })
  }

  setOBJ(object: ILogin): void {
    this.userOBJ = object;
    //would error out if it didn't have something in its required fields
  }

  getOBJ(): ILogin {
    return this.userOBJ;
  }

  //we are loogging in passing in our object and url, getting token back, and upon success, set obj, and then one more thing...

  //how to route alternatively from a router link

  //currently: router link, having it active and calling it good but now we are going to use a built in method of our router
}
