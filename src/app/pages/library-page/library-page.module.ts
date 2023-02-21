import { NgModule } from '@angular/core';
import { LibraryPageRoutingModule } from './library-page-routing.module';
import { LibraryPageComponent } from './library-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { CoverArtComponent } from './cover-art/cover-art.component';

@NgModule({
  declarations: [
    LibraryPageComponent,
    CoverArtComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LibraryPageRoutingModule
  ]
})
export class LibraryPageModule { }
