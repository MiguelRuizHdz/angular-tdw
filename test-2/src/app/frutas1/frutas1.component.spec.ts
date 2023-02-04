import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frutas1Component } from './frutas1.component';

describe('Frutas1Component', () => {
  let component: Frutas1Component;
  let fixture: ComponentFixture<Frutas1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frutas1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frutas1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
