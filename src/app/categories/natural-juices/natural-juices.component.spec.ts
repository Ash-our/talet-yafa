import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturalJuicesComponent } from './natural-juices.component';

describe('NaturalJuicesComponent', () => {
  let component: NaturalJuicesComponent;
  let fixture: ComponentFixture<NaturalJuicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NaturalJuicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaturalJuicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
