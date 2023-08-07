import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Album, List } from 'src/album';
import { environment } from 'src/environment/environment';
import { ALBUMS, ALBUM_LISTS } from "./mock-albums/mock-albums";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albums: Album[] = ALBUMS
  lists: List[] = ALBUM_LISTS;
  newAlbums: Album[] = [];
  selectedAlbum!: Album;
  selectedListe!: string[];
  selectedObject!: List;
  sendCurrentNumberPage = new Subject<number>();
  subjectAlbum = new Subject<Album>();
  constructor() { };
  getAlbums() {
    return this.albums.sort((a: Album, b: Album) => b.duration - a.duration);
  };
  getAlbum(id: string): Album {
    this.albums.forEach(el => {
      if (id === el.id) {
        this.selectedAlbum = el
      }
    });
    return this.selectedAlbum;
  };
  getRefs(ref: string): Album[] {
    return this.albums.filter(el => el.ref === ref)
  }
  getAlbumList(id: string) {
    this.selectedListe = this.lists.filter(el => el.id === id)[0].list
    return this.selectedListe
  }

  playParent(album: Album) {
    for (let i = 0; i < this.albums.length; i++) {
      if (this.albums[i].id !== album.id) {
        this.albums[i].status = 'off'
      } else {
        this.albums[i].status = 'on'
      }
    };
  }
  count() {
    return this.albums.length
  };
  paginate(start: number, end: number): Album[] {
    this.getAlbums()
    return this.albums.slice(start, end);
  }
  search(word: string): Album[] {
    let re = new RegExp(word.trim(), "g");
    return this.albums.filter(album => album.title.match(re));
  };
  /**
   *@param numberPage
   *@return
  */
  paginateNumberPage(): number {
    return environment.numberPage;
  }
  currentPage(numberPage: number){
    return this.sendCurrentNumberPage.next(numberPage);
  }
}
/**
 * #Service
 * Un service est une classe qui regroupe les propriétés partagés.
 * */ 