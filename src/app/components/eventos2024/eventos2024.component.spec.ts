import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventos2024Component } from './eventos2024.component';

describe('Eventos2024Component', () => {
  let component: Eventos2024Component;
  let fixture: ComponentFixture<Eventos2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventos2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventos2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
