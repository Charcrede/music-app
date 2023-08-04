import { style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { animation } from '../animation.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [animation]
})
  export class LoginComponent {
}
