import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Album, Gender } from "../../album";
import { AlbumService } from '../album.service';
import { GENRE } from "../mock-albums/mock-albums";
import { animation } from "../animation.module";
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
  animations:[animation],
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principale Albums Music'
  selectedAlbum!: Album;
  albums: Album[] = [];
  genre: Gender[]= GENRE;
  pDescrip: boolean = true;
  state: boolean = true;
  constructor(private service: AlbumService) { };
  onSelect(album: Album) {
    this.state = true;
    this.selectedAlbum = this.service.getAlbum(album.id);
  };
  onClick(genre: Gender) {
    this.albums = this.service.getRefs(genre.ref);
    console.log(genre);
    
  };
  playParent(album: Album) {
    return this.service.playParent(album)
  }
  showResult($event:Album[]){
    return this.albums = $event;
  }
  hideDetails($event: boolean){
    this.state = !this.state
  }
  onSetPaginate($event:{start: number, end: number}){
    this.albums= this.service.paginate($event.start, $event.end);
  }
  ngOnInit(): void {
    this.albums = this.service.paginate(0, this.service.paginateNumberPage());
  }
}

