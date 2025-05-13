import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcesComponent } from './ices.component';

describe('IcesComponent', () => {
  let component: IcesComponent;
  let fixture: ComponentFixture<IcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
