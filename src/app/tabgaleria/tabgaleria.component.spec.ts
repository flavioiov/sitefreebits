import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabgaleriaComponent } from './tabgaleria.component';

describe('TabgaleriaComponent', () => {
  let component: TabgaleriaComponent;
  let fixture: ComponentFixture<TabgaleriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabgaleriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabgaleriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
