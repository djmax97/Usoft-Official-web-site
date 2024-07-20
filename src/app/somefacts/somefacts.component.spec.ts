import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomefactsComponent } from './somefacts.component';

describe('SomefactsComponent', () => {
  let component: SomefactsComponent;
  let fixture: ComponentFixture<SomefactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomefactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomefactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
