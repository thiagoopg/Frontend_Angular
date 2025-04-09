import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigChartComponent } from './big-chart.component';

describe('BigChartComponent', () => {
  let component: BigChartComponent;
  let fixture: ComponentFixture<BigChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
