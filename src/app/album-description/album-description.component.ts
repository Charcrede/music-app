import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/album';
import { AlbumService } from '../album.service';


@Component({
  selector: 'app-album-description',
  templateUrl: './album-description.component.html',
  styleUrls: ['./album-description.component.css']
})
export class AlbumDescriptionComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: AlbumService) { }
 album!: Album;
  ngOnInit(): void {
    const id: string = this.route.snapshot.params['id'];
    this.album = this.service.getAlbum(id);
  }
  }

