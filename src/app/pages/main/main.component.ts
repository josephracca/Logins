import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ILogin } from 'src/app/interface/ILogin';
import { DataService } from 'src/app/services/data.service';
import { Service1Service } from '../../services/service1.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  SignedInUser:ILogin = {
    userName: "",
    password: ""
  }

  constructor(private dService: DataService) { }

  ngOnInit(): void {
    this.SignedInUser = this.dService.getOBJ();
  }
}
