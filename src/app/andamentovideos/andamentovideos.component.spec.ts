import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamentovideosComponent } from './andamentovideos.component';

describe('AndamentovideosComponent', () => {
  let component: AndamentovideosComponent;
  let fixture: ComponentFixture<AndamentovideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndamentovideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamentovideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
