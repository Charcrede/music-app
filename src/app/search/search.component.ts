import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AlbumService } from "../album.service";
import { Album } from "../../album";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  word!:string;
  @Output() result: EventEmitter<Album[]> = new EventEmitter();
  constructor(private service: AlbumService){}
  ngOnInit(): void { 
  };
  searchResult!:Album[] ;
  searcher(mot:string){
    this.searchResult = this.service.search(mot)
    this.result.emit(this.searchResult);

  }
  onSubmit() {
    this.searchResult = this.service.search(this.word)
    this.result.emit(this.searchResult);
  }
  onChangeEmit($event: string){
    this.result.emit(this.service.search($event))
  }

}
