import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Service1Service } from '../../services/service1.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  firstName: string = "Cowabunga";
  lastName: string = "";
  slackName: string = "";
  email: string = "";
  thepeople: any = [
  ]
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dService: DataService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(2)]),
    });
  }

  submitForm() {
    if (this.loginForm.invalid) {
      alert('Fix errors on form');
    } else {
      this.dService.signIn(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
