import { Component } from '@angular/core';
import { Constants } from 'SharedLib/src/app/_constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project1';
  name = Constants.NAME
  constructor() {
    localStorage.setItem('test', 'HELLO')
  }
}
