import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriacoberturaComponent } from './galeriacobertura.component';

describe('GaleriacoberturaComponent', () => {
  let component: GaleriacoberturaComponent;
  let fixture: ComponentFixture<GaleriacoberturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriacoberturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriacoberturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
