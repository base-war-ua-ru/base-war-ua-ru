import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidanHappenComponent } from './maidan-happen.component';

describe('MaidanHappenComponent', () => {
  let component: MaidanHappenComponent;
  let fixture: ComponentFixture<MaidanHappenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidanHappenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaidanHappenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
