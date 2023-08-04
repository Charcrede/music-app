import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'app-music';
  home:boolean = true;
  other: boolean =false;
  bgChangeHome(){
    this.home = true;
    this.other = false;
  }
  bgChangeOther($event: boolean){
    this.home = false;
    this.other = true;
  }
  ngOnInit(): void {
  }

}
