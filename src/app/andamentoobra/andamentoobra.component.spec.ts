import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentoobraComponent } from './andamentoobra.component';

describe('AndamentoobraComponent', () => {
  let component: AndamentoobraComponent;
  let fixture: ComponentFixture<AndamentoobraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentoobraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentoobraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
