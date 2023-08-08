import { Component, OnInit } from '@angular/core';
import { Album } from 'src/album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit{
  showplayer: boolean = false;
  playedAlbum!: Album;
  total: number = 1;
  currentSongNumber: number = 1;
  ratio: number = 0;
  constructor(
    private albumService: AlbumService
  ){}
  ngOnInit(): void {
    this.albumService.subjectAlbum.subscribe({
      next: (a: Album) => {
        this.playedAlbum = a;
        this.showplayer = true;
        this.currentSongNumber = 1;
        let duration : number = this.playedAlbum.duration; 
        this.total = Math.floor(duration/120);
        this.ratio = (100/ this.total);
        let step = this.ratio;
        let intervalId = setInterval(() => {
          this.ratio += step;
          this.currentSongNumber++;
          if(this.ratio > 100){
            clearInterval(intervalId);
            this.showplayer = false;
            this.albumService.switchOff(this.playedAlbum)
          }
        }, 1000);
      }
    })
  }

}
