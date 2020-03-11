import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.scss']
})
export class TrialComponent implements OnInit {

  constructor() {
  }

  title = 'my-dream-app';
  WelcomeMsg = 'I am ISSC student';
  student = {
    name: 'Mugdha',
    age: 21
  };
  students = ['Rohan', 'Satish', 'Shreyas', 'Ajay', 'Akash', 'Vikas'];
  teachers = [
    {
      name: 'Bedekar mam',
      subject: 'Numerical Analysis'
    },
    {
      name: 'Tondon Sir',
      subject: 'PPL2'
    },
    {
      name: 'Sonali Mam',
      subject: 'Soft Skills'
    }
  ];
  day = 'Tuesday';
  showWhiteText = false;
  showBoldText = false;
  reactLogoLink = './assets/reactLogo.png';
  myName = 'Mugdha Deshmukh';

  ngOnInit(): void {
  }

  sayHello() {
    this.showWhiteText = !this.showWhiteText;
    this.showBoldText = !this.showBoldText;
  }
}
