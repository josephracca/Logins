import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Service1Service } from '../../services/service1.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {
  answer: number = 0;
  direct: boolean = false;
  count: boolean = false;
  firstName: string = "Cowabunga";
  lastName: string = "";
  slackName: string = "";
  email: string = "";
  thepeople: any = [
    // {first:'Adrian',last:"Segura", mail:"asegura@codestack.co", slack:"Adrian Segura",ishere:true}, 
    // {first:'Alex',last:"Ato", mail:"alexato0731@gmail.com",slack:"Alex_Ato"}, 
    // {first:'Anothay',last:"Chansy", mail:"achansylee@outlook.com",slack:"ann"}, 
    // {first:'Bryan',last:"Stewart", mail:"stewartbj93@gmail.com", slack:"Bryan Stewart"}, 
    // {first:'Carlos',last:"Gonzalez", mail:"carlosg2011@gmail.com",slack:"Carlos Gonzalez"}, 
    // {first:'Christy',last:"Eang", mail:"christyeang@yahoo.com",slack:"ChristyCreme"}, 
    // {first:'Demitrius',last:"Ovro", mail:"Daovro@gmail.com",slack:"Demitrius Ovro"}, 
    // {first:'Hugo',last:"Mejia", mail:"huegogh@gmail.com", slack:"Hugo M"}, 
    // {first:'Joseph',last:"Racca", mail:"josephracca@gmail.com",slack:"josephRacca"}, 
    // {first:'Juan',last:"Morales", mail:"jmorales@codestack.co",slack:"Juan M"}, 
    // {first:'Kenneth',last:"Martinez", mail:"krossmartinez@gmail.com",slack:"Ken Martinez"}, 
    // {first:'Leopoldo',last:"Manzo", mail:"manzoleopoldo@gmail.com",slack:"Leo"}, 
    // {first:'Matthew',last:"Mendoza", mail:"mattjm112999@gmail.com",slack:"Mendoza"}, 
    // {first:'Sean',last:"Chandler", mail:"schandler@codestack.co",slack:"Sean Chandler"}, 
    // {first:'Trevor',last:"Womack Jr.", mail:"Twomack6823@gmail.com",slack:"Trevor Womack"}
  ]
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dService: Service1Service) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      mName: new FormControl('', Validators.required),
      hasMiddleName: new FormControl(false)
    });
  }

  setValue() {
    this.userForm.setValue(
      {
        fName: 'Cassandra',
        lName: 'Pamplona',
        mName: 'Casey',
        hasMiddleName: true
      });
  }

  patchValue() { this.userForm.patchValue({ fName: 'Casey' }); }

  submitForm() {
    if (this.userForm.invalid) {
      alert('Fix errors on form');
    } else {
      alert('Succesful!');
      console.log(this.userForm.value);
      this.userForm.reset();
    }
  }

  setNames(index: number) {
    this.firstName = this.thepeople[index].first;
    this.lastName = this.thepeople[index].last;
    this.slackName = this.thepeople[index].slack;
    this.email = this.thepeople[index].mail;
  }

  add() {
    this.answer++
  }
  sub() {
    this.answer--
  }
  setCount() {
    // this.direct = !this.direct;
    if (this.count == false) {
      this.count = true;
      this.direct = false;
    } else {
      this.count = false;
    }
  }
  setDirect() {
    // this.count = !this.count;
    if (this.direct == false) {
      this.direct = true;
      this.count = false;
    } else {
      this.direct = false;
    }

  }

  addStudent(fn, ln, em, sl) {
    const OBJ = {
      first: fn,
      last: ln,
      mail: em,
      slack: sl,
      ishere: true
    }
    this.thepeople.push(OBJ)
  }
  // weThePeople(){
  //   for(let p of this.thepeople)
  //   {
  //     console.log(p.first)
  //     console.log(p.last)
  //     console.log(p.slack)
  //     console.log(p.mail)
  //     console.log(p.ishere)
  //   }
  // }



}
