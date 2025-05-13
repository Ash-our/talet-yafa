import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojitoComponent } from './mojito.component';

describe('MojitoComponent', () => {
  let component: MojitoComponent;
  let fixture: ComponentFixture<MojitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MojitoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MojitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
