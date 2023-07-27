import { Component, OnInit } from '@angular/core';
import { Album, Gender } from "../../album";
import { AlbumService } from '../album.service';
import { GENRE } from "../mock-albums/mock-albums";
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  titlePage: string = 'Page principale Albums Music'
  selectedAlbum!: Album;
  albums: Album[] = [];
  genre: Gender[]= GENRE;
  page1!: Album[];
  page2!: Album[];
  page3!: Album[];
  click: number = 0;
  constructor(private service: AlbumService) { };
  onSelect(album: Album) {
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
  ngOnInit(): void {
    this.page1 = this.service.paginate(0, Math.floor(this.service.count() / 3));
    this.page2 = this.service.paginate(Math.floor(this.service.count() / 3), (Math.floor(this.service.count() / 3) * 2));
    this.page3 = this.service.paginate((Math.floor(this.service.count() / 3) * 2), this.service.count());
    this.albums = this.service.paginate(0, this.service.count());
  }
}

