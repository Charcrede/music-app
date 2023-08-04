import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  dataEmitter: Subject<string>=new Subject();

  constructor() { }
  sendData(data: string){
    this.dataEmitter.next(data)
  }
}
