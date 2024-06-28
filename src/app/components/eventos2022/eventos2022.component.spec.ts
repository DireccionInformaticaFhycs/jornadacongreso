import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventos2022Component } from './eventos2022.component';

describe('Eventos2022Component', () => {
  let component: Eventos2022Component;
  let fixture: ComponentFixture<Eventos2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eventos2022Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventos2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
