import { Component, OnInit, Input } from '@angular/core';
import { Album, List } from 'src/album';
import { ALBUM_LISTS } from "../mock-albums/mock-albums";

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  @Input() album!: Album;
  @Input() list!: List;
  lists:List[] = ALBUM_LISTS;
  constructor(){ }
  ngOnInit(): void {
    console.log(this.album);
  }

}
