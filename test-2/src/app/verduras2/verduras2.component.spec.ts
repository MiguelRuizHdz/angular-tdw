import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verduras2Component } from './verduras2.component';

describe('Verduras2Component', () => {
  let component: Verduras2Component;
  let fixture: ComponentFixture<Verduras2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Verduras2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verduras2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
