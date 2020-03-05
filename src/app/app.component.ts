import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  sayHello(){
    //alert('Hello I am Mugdha');
    this.showWhiteText = !this.showWhiteText;
    this.showBoldText = !this.showBoldText;
  }
}
