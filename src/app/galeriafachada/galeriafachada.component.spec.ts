import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriafachadaComponent } from './galeriafachada.component';

describe('GaleriafachadaComponent', () => {
  let component: GaleriafachadaComponent;
  let fixture: ComponentFixture<GaleriafachadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriafachadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriafachadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
