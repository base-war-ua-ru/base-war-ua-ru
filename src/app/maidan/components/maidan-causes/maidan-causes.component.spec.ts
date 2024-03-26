import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidanCausesComponent } from './maidan-causes.component';

describe('MaidanCausesComponent', () => {
  let component: MaidanCausesComponent;
  let fixture: ComponentFixture<MaidanCausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidanCausesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaidanCausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
