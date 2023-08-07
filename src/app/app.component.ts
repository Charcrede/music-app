import { animation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { interval, map, Observable, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit{
  title = 'app-music';
  home:boolean = true;
  other: boolean =false;
  receivedText: string | undefined;
  timerObservable!: Observable<string>;
  count!: string;
  bgChangeHome(){
    this.home = true;
    this.other = false;
  }
  bgChangeOther($event: boolean){
    this.home = false;
    this.other = true;
  }
  format(num: number): string{
    return (num < 10 ? '0' + num : ''  + num);
  }
  ngOnInit(): void {
    this.timerObservable = interval(1000).pipe(
      take(3600 *12),
      map((num: number) => {
        const hours = Math.floor (num/3600);
        const min = Math.floor ((num - (hours * 3600)) / 60);
        const sec = ((num - ((hours * 3600) + (min * 60))));
        return `Time : ${this.format(hours)} h ${this.format(min)} min ${this.format(sec)} s`;
      })
    );
    this.timerObservable.subscribe(time => {
      this.count = time;
    })
  }

}
