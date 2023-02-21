import { Component, Input, OnInit } from '@angular/core';
import { AnimeLibraryEntry } from 'src/app/shared/models/anime-library-entry';

@Component({
  selector: 'app-cover-art',
  templateUrl: './cover-art.component.html',
  styleUrls: ['./cover-art.component.css']
})
export class CoverArtComponent implements OnInit {

  @Input() anime!: AnimeLibraryEntry;

  posterImageSrc: string = '';
  title: string = '';

  constructor() {}

  ngOnInit() {
    this.posterImageSrc = this.anime.posterImageSrc;
    this.title = this.anime.title;
  }

}
