import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.css'],
})
export class PaginateComponent implements OnInit{
  @Output() setPaginate: EventEmitter<{start: number, end: number}> = new EventEmitter()
    numberPages: number = 0;
    currentPage: number = 1;
    total:number = 0;
    pages: number[] = [];
    // nombre d'album(s) par page(stocké dans les variables d'environnement 'environment')
    perPage: number;
    constructor(private service : AlbumService){
        this.perPage = this.service.paginateNumberPage();
    }
    next(){
      this.currentPage++;
      this.setPaginate.emit(this.setAlbums(this.currentPage));
    }
    prev(){
      this.currentPage--;
      this.setPaginate.emit(this.setAlbums(this.currentPage));
    }
    changePage(page: number){
      this.currentPage = page;
      this.setPaginate.emit(this.setAlbums(page));
    }
    /**
     * @param page page courrante
     * @returns sous ensemble de tableau
     * Fonction qui retourne le sous-ensemble d'albums a afficher
     */
    setAlbums(page: number) : {start: number, end: number}{
      let start = (page - 1 ) * this.perPage;
      let end = start + this.perPage;
      return {start, end}
    }
    ngOnInit(): void {
       this.total = this.service.count();
       this.numberPages = Math.ceil(this.total/this.perPage);
       for (let i = 1; i <= this.numberPages; i++) {
          this.pages.push(i);
       }
    }
}