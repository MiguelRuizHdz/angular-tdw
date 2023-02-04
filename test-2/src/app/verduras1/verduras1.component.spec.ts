import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verduras1Component } from './verduras1.component';

describe('Verduras1Component', () => {
  let component: Verduras1Component;
  let fixture: ComponentFixture<Verduras1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Verduras1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verduras1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
