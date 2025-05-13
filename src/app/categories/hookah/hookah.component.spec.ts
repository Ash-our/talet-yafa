import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookahComponent } from './hookah.component';

describe('HookahComponent', () => {
  let component: HookahComponent;
  let fixture: ComponentFixture<HookahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HookahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
