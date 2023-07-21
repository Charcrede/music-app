import { Component, OnInit } from '@angular/core';
import { Album, List } from "../../album";
import { ALBUMS } from "../mock-albums/mock-albums";
import { ALBUM_LISTS } from "../mock-albums/mock-albums";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  titlePage: string = 'Page principale Albums Music'
  albums: Album[] = ALBUMS;
  lists:List[] = ALBUM_LISTS;
  selectedAlbum!: Album;
  selectedListe!:List;
  constructor(){ };
  transformer(nomb: string) : number{
    return Number(nomb);
  }
  onSelect(album: Album){
    this.selectedAlbum = album;
    this.lists.forEach(el => {
      if (el.id === album.id) {
        this.selectedListe = el;
        console.log(album);
        
        console.log(this.selectedListe);
        
      }
    });
  }
  ngOnInit(): void { }
}
