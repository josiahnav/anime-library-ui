import { Component, OnInit } from '@angular/core';
import { AnimeLibraryEntry } from 'src/app/shared/models/anime-library-entry';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  animeLibrary: AnimeLibraryEntry[] = [];
  limit: number = 20;
  offset: number = 0;

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this._apiService.getAnime(this.limit, this.offset).subscribe(res => {
      this.animeLibrary = res.animeLibrary;
    });
  }

  onCoverArtClick(id: number) {
    this._apiService.getAnimeDetails(id).subscribe(res => {
      console.log(res);
    });
  }

  onScroll() {
    this._apiService.getAnime(this.limit, ++this.offset).subscribe(res => {
      this.animeLibrary.push(...res.animeLibrary);
    });
  }

}
