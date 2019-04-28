import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentorelatoriosComponent } from './andamentorelatorios.component';

describe('AndamentorelatoriosComponent', () => {
  let component: AndamentorelatoriosComponent;
  let fixture: ComponentFixture<AndamentorelatoriosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentorelatoriosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentorelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
