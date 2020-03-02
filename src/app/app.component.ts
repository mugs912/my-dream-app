import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  WelcomeMsg='I am ISSC student';
  student={
    name:'Mugdha',
    age:21
  };
  students=['Rohan','Satish','Shreyas','Ajay','Akash','Vikas'];
}
