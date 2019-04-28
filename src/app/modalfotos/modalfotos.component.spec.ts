import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalfotosComponent } from './modalfotos.component';

describe('ModalfotosComponent', () => {
  let component: ModalfotosComponent;
  let fixture: ComponentFixture<ModalfotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalfotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalfotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
