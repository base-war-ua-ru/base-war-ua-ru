import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidanComponent } from './maidan.component';

describe('MaidanComponent', () => {
  let component: MaidanComponent;
  let fixture: ComponentFixture<MaidanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaidanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaidanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
