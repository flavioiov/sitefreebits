import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentofotosComponent } from './andamentofotos.component';

describe('AndamentofotosComponent', () => {
  let component: AndamentofotosComponent;
  let fixture: ComponentFixture<AndamentofotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentofotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentofotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
