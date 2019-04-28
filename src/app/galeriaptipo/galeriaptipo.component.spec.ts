import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaptipoComponent } from './galeriaptipo.component';

describe('GaleriaptipoComponent', () => {
  let component: GaleriaptipoComponent;
  let fixture: ComponentFixture<GaleriaptipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaptipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaptipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
