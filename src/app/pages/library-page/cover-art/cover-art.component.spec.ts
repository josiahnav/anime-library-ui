import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverArtComponent } from './cover-art.component';

describe('CoverArtComponent', () => {
  let component: CoverArtComponent;
  let fixture: ComponentFixture<CoverArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverArtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoverArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
