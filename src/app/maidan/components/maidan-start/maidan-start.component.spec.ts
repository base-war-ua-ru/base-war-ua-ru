import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidanStartComponent } from './maidan-start.component';

describe('MaidanStartComponent', () => {
  let component: MaidanStartComponent;
  let fixture: ComponentFixture<MaidanStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidanStartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaidanStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
