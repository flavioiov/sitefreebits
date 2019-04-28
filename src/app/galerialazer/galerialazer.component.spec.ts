import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerialazerComponent } from './galerialazer.component';

describe('GalerialazerComponent', () => {
  let component: GalerialazerComponent;
  let fixture: ComponentFixture<GalerialazerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerialazerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerialazerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
