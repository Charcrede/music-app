import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from "@angular/animations";
import { Observable, Observer } from 'rxjs'; // Reactive eXtension JavaScript

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
})
export class OpenCloseComponent implements OnInit {
  ngOnInit(): void {
    this.myObservable.subscribe(album => {
      console.log(album);
    });
    
  }
  //Observable: produit | objet | message qui sera diffusé
  //Observer: l'élément qui souscrit pour un produit | objet | message donné
  isOpen: boolean = true;
  // new Observable((observer) => {});
  myObservable = new Observable((observer: Observer<string>) => {
    // le code a exécuté quand on récupère la donnée
   setTimeout(() => {observer.next('album 1')}, 1000)
   setTimeout(() => {observer.next('album 2')}, 2000)
   setTimeout(() => {observer.next('album 3')}, 3000)
   setTimeout(() => {observer.next('album 4')}, 4000)
   setTimeout(() => {observer.next('album 5')}, 5000)
    
  })
  toggle(){
    this.isOpen = !this.isOpen;
  }
  texteEnter: string | undefined;
  parentReceive($event: string){
    this.texteEnter = $event;
  }
}
