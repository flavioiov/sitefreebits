import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresentaffaComponent } from './apresentaffa.component';

describe('ApresentaffaComponent', () => {
  let component: ApresentaffaComponent;
  let fixture: ComponentFixture<ApresentaffaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApresentaffaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresentaffaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
