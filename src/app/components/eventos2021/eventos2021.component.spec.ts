import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventos2021Component } from './eventos2021.component';

describe('Eventos2021Component', () => {
  let component: Eventos2021Component;
  let fixture: ComponentFixture<Eventos2021Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventos2021Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventos2021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
