import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabandamentoComponent } from './tabandamento.component';

describe('TabandamentoComponent', () => {
  let component: TabandamentoComponent;
  let fixture: ComponentFixture<TabandamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabandamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabandamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
