import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Frutas2Component } from './frutas2.component';

describe('Frutas2Component', () => {
  let component: Frutas2Component;
  let fixture: ComponentFixture<Frutas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Frutas2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Frutas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
