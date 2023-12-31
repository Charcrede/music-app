import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Album, List } from 'src/album';
import { AlbumService } from '../album.service';
import { ALBUM_LISTS } from "../mock-albums/mock-albums";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  seen: boolean = true;
  @Input() album!: Album;
  // @Input() list!: List;
  @Output() onPlay: EventEmitter<Album> = new EventEmitter();
  @Output() hide: EventEmitter<boolean> = new EventEmitter();
  lists: List[] = ALBUM_LISTS;
  liste!: string[] | undefined;
  listeRandom: string[] = [];
  constructor(
    private service: AlbumService
  ) { }
  play(album: Album) {
    this.onPlay.emit(album);
    this.service.switchOn(album);
  }
  hider(seen: boolean) {
    this.hide.emit(seen);
  }
  ngOnInit(): void {
    // console.log(this.album);
  }
  ngOnChanges() {
    if (this.album !== undefined) {
      this.liste = this.service.getAlbumList(this.album.id);
    }
  }
  aleatoire() {
    let listeCop: string[] = [...this.liste!];
    this.listeRandom = [];
    let count: number = listeCop.length
    for (let i = listeCop?.length; i >= 0; i--) {
      let id = Math.floor(Math.random() * count)
      listeCop?.forEach((el, u) => {
        if (id === u && el) {
          this.listeRandom.push(el);
          listeCop?.splice(u, 1);
        } else {i = listeCop?.length}
      });
    }
    return this.liste = this.listeRandom
  }
}
