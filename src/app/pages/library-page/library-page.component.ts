import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-library-page',
  templateUrl: './library-page.component.html',
  styleUrls: ['./library-page.component.css']
})
export class LibraryPageComponent implements OnInit {

  animeLibrary: any[] = [];

  constructor(private _apiService: ApiService) {}

  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this._apiService.getAllAnime().subscribe(res => {
      this.animeLibrary = res.data;
    });
  }

}
